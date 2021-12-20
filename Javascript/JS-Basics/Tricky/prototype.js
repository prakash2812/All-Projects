// 1) Each js object has it own prototype property which makes inheritance in js
// 2) The prototype of an objecct is where we put all out methods and poperties that we want other objects to inherit
// 3) The constructor prototype property is not prototype of constructor itsself
//   its prototype to all instance that are created through it will
// 4) when a certain method is called ,
// 4a) search starts in currrent objecct itself
// 4b) if it can't be found then moves up to object prototypes
//  4c) this flow continues untill the method found : prototype chainig or object inheritance
//  4d) Fianlly if any method not found then null is only method of end of flow. its return undefined
// Null is only an object which doesn't have any prototypes


// __proto__ is an object of every class instance and it points to prototype it was created from(constructor function)
// ---------------------------------------------------------
// https://www.youtube.com/watch?v=3AKh0-PDsMw
https://www.youtube.com/watch?v=XskMWBXNbp0
// code studio , codedamn , code evolution , UI dot dev
// 
// --------------------------------- function constructor prototype -----------------------------------------------------------------
let Person = function ([name, yearOfBirth, job]) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    /* this.calculateAge = function () {
        console.log(2020 - this.yearOfBirth);
    } */
}
//  we kept methods/properties in prototype so that each instance of new constructor doesn't need to carry huge lines of function.

Person.prototype.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
}

let usersData = [
    ['john', 1990, 'teacher'],
    ['jane', 1994, 'developer'],
    ['mane', 1996, 'Hr']
]
let john = new Person(usersData[0]) // john instance of object Person
let jane = new Person(usersData[1]) // jane instance
let mane = new Person(usersData[2]) // mane instance

john.calculateAge()
jane.calculateAge()
mane.calculateAge()

console.dir(Person) //
/* arguments: null
caller: null
length: 0
name: "computer"
prototype: { mouse: ƒ, click: ƒ, constructor: ƒ }
__proto__: ƒ()
[[FunctionLocation]]: VM1557: 1
[[Scopes]]: Scopes[2] */

// __proto__ of an object is always equal to protoype of an function which created from it
console.log(john.__proto__ === Person.prototype);
// --------------------------------------- with out function constructor -----------------------------------------------------------------
let user = {
    name: 'arjun',
    age: 24
}

// let user = new Object({name:'arjun',age:24})
// object .create is makes inherentce one object ot another. newuser can access user properties and methods
// user properties will show in __proto__ object hence those can be accessed by newuser cause we given Object.creae
let newUser = Object.create(user)
newUser.job = 'developer'
console.log(newUser); //{ job: 'developer' }
console.log(newUser.name); //'arjun'
console.log(newUser.age); //24
console.log(newUser.job); //developer

let thirdUser = Object.create(user)
thirdUser.job = 'Manager'

console.log(thirdUser); //{ job: 'Manager' }
console.log(thirdUser.name); //'arjun'
console.log(thirdUser.age);// 24
console.log(thirdUser.job);// Manager

// -----------------------------------------------------------------------------------------------------------------------
let user = {
    name: 'arjun',
    age: 23
}
// dunder proto
// user1.__proto__ === user
// user1 can access all properties and methods of user 
console.log(user.__proto__ === Object.prototype); // true
let user1 = Object.create(user)
user1.name //arjun
user1.age //23

// ---------------------------------------------------------------------------

Object.__proto__ === Function.prototype  // true
Function.__proto__ === Function.prototype // true
Function.__proto__ === Object.__proto__ // true

// prototype lo proto will be there

function foo() { } // an function and Object and function can only have prototype and __proto__
foo.__proto__ === Function.prototype // Function.prototype has __proto__ // 
Function.prototype.__proto__ === Object.prototype // Object.prototype has __proto__
Object.prototype.__proto__ === null

foo.prototype.__proto__ === Object.prototype

let x = new foo()

x.__proto__ === foo.prototype // prototype have __proto__
foo.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null






