// factorial function and constructor functions means used to create objects

// ------------------ factorial function -----------------------
function factorial() {
    return {
        name: 'arjun',
        age: 28,
        role: 'developer',
    }
}

const fact = factorial(); // return object
// function is an object in js each object has own constructor property
console.log(fact.constructor); // f Object()
// so Object() is a constructor of fact object
//  so new Object() is creating an object in factorial function 

// ---------------- constructor function ----------------------------------------
// name start with pascal case // means capital  eg: OneTwoThree
// we use new keyword for constructor function to create object else it point to global object "window"
// reusable the same object with diff param.
//  That’s the main purpose of constructors – to implement reusable object creation code.

function Circle(raius) {
    // this ={} 
    /* if (!new.target) {
        // new Circle(2) // incase if we forgot new key word at line 34 i.e., new Circle(2)
    } */
    this.radius = radius,
        this.draw = function () {
            console.log('draw circle');
        }
    // return this 
}

const circle = new Circle(2); // {radius: 2, draw : f function}
console.log(circle.constructor); // f Circle constructor function
//Circle is constructor function: in Js Function is an object
console.log(Circle.constructor); // f Function is an constructor of Circle

// so in js new Function() is creating an object
const Circle = new Function('radius', `
this.radius = radius,
        this.draw = function () {
        console.log('draw circle');
        }
`)
const circle = new Circle(2)

// ------------ function declaration ----------------------------------------------------------------

// function declaration 
function add() {
    return {
        name: 'arjun'
    }
}

// ---------- function expression -------------------------------------------------

const add = function () {
    return {
        add: 23
    }
}

// ------------- arrow functions -----------------------------------------------

const add = () => {
    return {
        //  for multiple statements
    }
}

const add = item => item + 1
// ----------------------------------------------------------------
// for constructor function we don't user arrow function cause it don't have this
const Animal = () => {
    this.name = 'arjun'
}

let cat = new Animal() // Animal is not a constructor function cause u used arrow function

Animal.prototype // it doesn't have prototype

// ----------------------------------------------------------------------------------------
/* Arrow functions:

Do not have this
Do not have arguments
Can’t be called with new // above eg
They also don’t have super, but we didn’t study it yet.We will on the chapter Class inheritance */