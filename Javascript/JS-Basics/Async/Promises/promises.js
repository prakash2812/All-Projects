//  Promise is an object  which return single value for future
//  either resolve or reject
//  it has three states pending, fulfilled, rejected

// https://www.youtube.com/watch?v=d05JB6Xxc5A&list=PLT5Jhb7lgSBOObN1-MkdU8_n2yBg4W6KN
// https://www.youtube.com/watch?v=_8gHHBlbziw  - deved
// https://www.youtube.com/watch?v=rbVzjbyGmmM&t=230s -- code studio
// https://www.youtube.com/watch?v=TgT-suhYMYo
// https://www.youtube.com/watch?v=jIBI6LM4KKY
// https://www.youtube.com/watch?v=rbVzjbyGmmM&list=PLT5Jhb7lgSBMbcbZGQPJc20dkbswRr3Il

// https://www.youtube.com/watch?v=IGoAdn-e5II&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf&index=12 -- tech shit

// Each method in promise itself return an promise {status:'fulfilled',result: value}
// Hence multi chaining is possible
// -------------------- ----------------------------------------
const user = new Promise((resolve, reject) => {
    if (1) {
        resolve('arjun')
    } else {
        reject("prakash")
    }
})
const user1 = new Promise((resolve, reject) => { resolve('first') })
const user2 = new Promise((resolve, reject) => { resolve('second') })
const user3 = new Promise((resolve, reject) => { resolve('third') })
user.all([user, user1, user2, user3])
    .then(res => res + '1')
    .then(res => res + '2')
    .catch(err => console.log(err.message))
    .then(res => console.log(res))

//  Todo: make sure u should not user this method any where
// ---------------------------------------------------------------------
const urls = [
    "http://jsonplaceholder.typicode.com/users",
    "http://jsonplaceholder.typicode.com/posts",
    "http://jsonplaceholder.typicode.com/comments"
]

Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
}))
    .then(res => {
        console.log(res[0].slice(0, 5));
        console.log(res[1].slice(0, 10));
        console.log(res[2].slice(0, 10));
    })
    .catch(error => console.log(error.message))
// ------------------------------------------------------------------------------------------
const urls = [
    "http://jsonplaceholder.typicode.com/users",
    "http://jsonplaceholder.typicode.com/posts",
    "http://jsonplaceholder.typicode.com/comments"
]

let fetchData = async (urls) => {
    let data = urls.map(async (url) => {
        let response = await fetch(url)
        let res = await response.json()
        return res
    })
    let result = await Promise.all(data)
    return result
}

fetchData(urls)
    .then(res => {
        res.map((item) => console.log(item.slice(0, 5)))
    })
    .catch(e => console.log(e.message))





// ------------------------------------------------------------------------------------------------
let cleanRoom = () => {
    return new Promise((resolve, reject) => {
        resolve('cleaned Room ')
    })
}

let removeGarbage = (message) => {
    return new Promise((resolve, reject) => {
        resolve(message + 'garbage removed ')
    })
}

let winBonus = (message) => {
    return new Promise((resolve, reject) => {
        resolve(message + 'won Bonus')
    })
}

cleanRoom().then((res) => {
    return removeGarbage(res)
}).then((res) => {
    return winBonus(res)
}).then((res) => {
    console.log('all finished', res)
})

Promise.all([cleanRoom(), removeGarbage(), winBonus()]).then((res) => {
    console.log('finished', res)
    // finished [ 'cleaned Room ', 'undefinedgarbage removed ', 'undefinedwon Bonus' ]
})

Promise.race([cleanRoom(), removeGarbage(), winBonus()]).then((res) => {
    console.log('finished', res)
    // finished cleaned Room 
})

// -----------------------------------------------Static methods(class methods) == -----------------------
/* Promise.all(iterable)
Wait for all promises to be resolved, or for any to be rejected.
If the returned promise resolves, it is resolved with an aggregating array of the values from the resolved promises, in the same order as defined in the iterable of multiple promises.
If it rejects, it is rejected with the reason from the first promise in the iterable that was rejected. */

/*
Promise.allSettled(iterable)
Wait until all promises have settled(each may resolve or reject).
Returns a Promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.
 */

/*     Promise.any(iterable)
Takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise.
 */

/* Promise.race(iterable)
Wait until any of the promises is resolved or rejected.
If the returned promise resolves, it is resolved with the value of the first promise in the iterable that resolved.
If it rejects, it is rejected with the reason from the first promise that was rejected.
*/

let cleanRoom = () => {
    return new Promise((resolve, reject) => {
        resolve()
        // reject('aryan')

    })
}
let removeGarbage = () => {
    return new Promise((resolve, reject) => {
        resolve()
        // reject('aryan')
    })
}
let wonBonus = () => {
    return new Promise((resolve, reject) => {
        resolve()

    })
}

// return new Promise and wait all promises are fulfilled or for any to be rejected
Promise.all([cleanRoom(), removeGarbage(), wonBonus()])
    .then(res => console.log(res)) //[undefined,undefined,undefined]
    .catch(err => console.log("issue is", err)) // aryan

//return new promise and wait until all promises are settled (each may resolve or reject)
// Returns a Promise that resolves after all of the given promises have either resolved or rejected,
Promise.allSettled([cleanRoom(), removeGarbage(), wonBonus()])
    .then(res => console.log(res))
/* [
{ status: 'fulfilled', value: undefined },
{ status: 'rejected', reason: 'aryan' },
{ status: 'fulfilled', value: undefined }
] */


// return single promise of resolve value
Promise.any([cleanRoom(), removeGarbage(), wonBonus()])
    .then(res => console.log(res)) // undefined

// return first single promise either resolve or reject
Promise.race([cleanRoom(), removeGarbage(), wonBonus()])
    .then(res => console.log(res))
    .catch(err => console.log(err))//aryan
