// --------------------- call back ------------------------------------------
function print(prev, curr, callback) {
    setTimeout(() => {
        console.log()
        callback(`${prev} ${curr}`)
    }, 1000)
}
function printAll() {
    print("", 'A', (result) => {
        print(result, 'B', (result) => {
            print(result, 'C', (result) => {
                console.log(result)
            })
        })
    })
}


// 0--------------------- promises --------------------------------------------------

function print(prev, curr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${prev} ${curr}`)
        })
    })
}
function printAll() {
    print('', 'A').then((res) => {
        return print(res, 'B')
    }).then((res) => {
        return print(res, 'C')
    })
}

// --------------------- async await ------------------------------------------------
function print(prev, curr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${prev} ${curr}`)
        })
    })
}

async function printAll() {
    let output = await print('', 'A')
    let output1 = await print(output, 'B')
    let output2 = await print(output1, 'C')
    return output2
}

// --------------------------------------- async in loops for map ---------------------------------------------

let getFruit = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        })
    })
}

let fruitCount = async () => {
    let dataMessage = ['apple', 'grapes'].map(async (item) => {
        const out = await getFruit(item)
        console.log('OutPut', out) // apple , grapes    
        return out
    })
    const result = await Promise.all(dataMessage)// dataMessage is an array of promises //[ Promise { 'apple' }, Promise { 'grapes' } ]
    console.log('main message', dataMessage, result) // main message [ Promise { 'apple' }, Promise { 'grapes' } ] [ 'apple', 'grapes' ]
    return result
}

fruitCount().then(res => {
    const data = res.map(item => item + 1)
    console.log('last', data)
})