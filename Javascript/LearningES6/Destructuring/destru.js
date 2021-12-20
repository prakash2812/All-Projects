// https://www.youtube.com/watch?v=RJaRRS27100
// https://www.youtube.com/watch?v=NIq3qLaHCIs

// --> Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects 
// into a bunch of variables, as sometimes that’s more convenient.
// Destructuring also works great with complex functions that have 
// a lot of parameters, default values, and so on.

// let [item1 = default , item2, ...rest] = array
// let { prop: varName = default, ...rest } = object
// ----------------------------------------------------------------------------------------------
let [firstname = 'arjun', lastname] = [] // default assign is = can me promise or function or object
console.log(firstname, lastname) // arjun undefined 

let [firstname = { value: 'arjun' }, lastname] = [] // default assign can me promise or function or object
console.log(firstname.value, lastname)//arjun undefined

let arr = ['arjun', 'prakash', 23, 123, { id: 123 }]
let [name, , age, ...rest] = arr
console.log(name, age, rest) // arjun ,123, [123,{id:123}]
// ------------------------------------------------------------------------------
let admin = 'david'
let developer = 'john';
[admin, developer] = [developer, admin] // swap
console.log(admin, developer)
// ============================================================================================
function add({ name, language, mixstar, minstar = 0, createdbefore = null, createdafter }) {
    console.log(name, language, minstar, createdbefore, createdafter)//arjun eng 0 null 1483209000000
}

add({
    name: 'arjun',
    language: 'eng',
    maxstar: 2,
    createdafter: new Date('01/01/2017').getTime()
})

// -------------------------------concat spread ---------------------------------
let user = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let person = ['arjun', { value: 123 }, ['prakash'], 123]

let arr = [] // concat two //arr.concat(user, person)
console.log([user, person]) // [[1, 2, 3, 4, 5, 6, 7, 8, 9],['arjun', { value: 123 }, ['prakash'], 123]]
console.log(arr.concat(user, person)) // [1, 2, 3, 4, 5, 6, 7, 8, 9,'arjun', { value: 123 }, ['prakash'], 123]

let newArray = [...user, ...person] // arr.concat(user,person)
console.log(newArray) //[1, 2, 3, 4, 5, 6, 7, 8, 9,'arjun', { value: 123 }, ['prakash'], 123]
// -------------------------------------------------------------------------------------------------
function add(a, b) {
    return [a + b, a * b, a / b]
}

let [sum, mul, div = 'no divison'] = add(2, 3)

console.log(sum, mul, div) // 5 6 0.6666

// ------------ iterable can be destructors-----------------------------
let [a, b, c] = "abc"; // ["a", "b", "c"]
let user = new Set([1, 'arjun', 3, { value: 123 }])
let [, name, id, ...rest] = user
console.log(name, id, rest) //arjun 3 [ { value: 123 } ]

let person = new Map()
person.set('name', 'arjun')
person.set('id', 12)

for (let [key, value] of person) {
    console.log(`${key}:${value}`) // name: arjun id:12
}
// --------------------------------------------------------------------

let data = {
    name: 'arjun',
    age: 12
}

for (let [key, value] of Object.entries(data)) {
    console.log(`${key}:${value}`) //name:arjun    age: 12
}

// ------------------------------------------------------------------
let user = {};
[user.name, user.age] = 'arjun 20'.split(' ')
console.log(user)
console.log(user.name)
console.log(user.age)
// --------------------------------------Objects -----------------------------

let user = { name: 'arjun', age: 23 }
let person = { name: 'prakash', age: 32 }

let employee = { ...user, ...person } // concat and override if key is same
console.log(employee) // { name: 'prakash', age: 32 }
// -----------------------------------------------------------------


let options = {
    title: "Menu",
    height: 200,
    width: 100
}

    ({ title, height, width } = options) // if we want to destructors with out let/const keyword

// ----------------------------------------- nested objects ------------------------

let user = {
    name: 'arjun',
    age: 23,
    students: {
        name: 'prakash',
        standard: 12,
        id: 123,
        friends: {
            name: ['david', 'john', 'nancy', 'mike', 'will']
        }
    }
}

const {
    name, age, students: { standard, friends: { name: [name1, name2 = 'arjun', name3, name4] } }
} = user

console.log(name)
console.log(standard)
console.log(age)
console.log(name2)
console.log(name3)
console.log(students) //error 
// -------------------------------------
let user = {
    name: 'arjun', age: 12
}

let { name: firstname = 'prakash', age, id: empid = 123 } = user

console.log(firstname, empid) // arjun 123

// -----------------------------------
let user = {
    name: 'arjun',
    age: 12,
    id: 123
}
let { name, ...rest } = user

console.log(rest)//{age:12,id:123}



// --------------------------------------------------------------
function add({ item = 'carts', price = 123, catalog = 'qw123' }) {

}

add({}) // if all are default 
add() // thow error

function add({ item = 'carts', price = 123, catalog = 'qw123' } = {}) {

}

add() // no error cause in function u declared whole default ={}

// -------------------------------------rest spread -----------------------------------------
/* There’s an easy way to distinguish between them:

When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list. */
// arguments are array like objects . it a in built object . only for regular functions
// arguments are old level spread operator 
// arrow function doesn't have arguments
function showName() {
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[1]);

    // it's iterable
    // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");
