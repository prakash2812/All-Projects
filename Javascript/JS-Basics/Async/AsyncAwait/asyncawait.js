// ------------------ using promises ----------------------------------------------------

console.log('Person 1 ticket')
console.log('Person 2 ticket')

let wifeBringTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('tickets')
    }, 1000)
})

let getPopcorn = wifeBringTickets.then((res) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`popcorn ${res}`)
        }, 2000)
    })
})

let getButter = getPopcorn.then(res => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`butter ${res}`)
        }, 1000)
    })
})

getButter.then((res) => {
    console.log(`person 3 ${res}`)
})

console.log('Person 4 ticket')


// Async function is always return an promise
// await we can use only in Async function

// ----------------------------------------------- using async await ------------------------------------------------
console.log('Person 1 ticket')
console.log('Person 2 ticket')

let preMovie = async () => {
    let wifeBringTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('tickets')
        }, 2000)
    })
    console.log('after wife1 promise')
    let getPopcorn = new Promise((resolve, reject) => resolve('popcorn'))
    console.log('after popcorn1 promise')
    let getButter = new Promise((resolve, reject) => resolve('butter'))
    console.log('after butter1 promise')

    let ticket = await wifeBringTickets
    console.log('after ticket1 await')
    let popcorn = await getPopcorn
    console.log('after popcorn1 await')
    let butter = await getButter
    console.log('after butter1 await')


    // let [ticket, popcorn, butter] = await Promise.all([wifeBringTickets, getPopcorn, getButter])
    console.log(`  ${butter} ${popcorn} ${ticket}`)
    return `${butter} ${popcorn} ${ticket} `
}

preMovie().then((res) => {
    console.log(`person 3 ${res}`)
})

console.log('Person 4 ticket')

// execution flow is 
// Person 1 ticket
// Person 2 ticket
// after wife1 promise
// after popcorn1 promise
// after butter1 promise
// Person 4 ticket
// after ticket1 await
// after popcorn1 await
// after butter1 await
// butter popcorn tickets
// person 3 butter popcorn tickets

// ------------------------------------------------real time example -----------------------------------------
const testUserForm = async () => {
    let loadForm = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('form loaded')
        })
    })

    let enterUserName = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('entered username')
        })
    })


    let form = await loadForm
    let username = await enterUserName
    let verifyDetails = () => {
        return `${form} ${username}`
    }

    let testResult = verifyDetails()
    return testResult
}

testUserForm().then((res) => {
    console.log(res)
})
// ------------------------------------- async in loops ---------------------
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

// --------------------- execution flow ---------------------------------
async function first() {
    console.log('first');
    await second();
    await third();
    console.log('second then');
}

async function second() {
    console.log('second test');
}

async function third() {
    console.log('third');
}

setTimeout(() => {
    console.log('settime');
}, 0);

console.log('main');

first();

new Promise((resolve, reject) => {
    console.log('promise');
    resolve();
}).then(() => {
    console.log('promise then');
});

console.log('last');

