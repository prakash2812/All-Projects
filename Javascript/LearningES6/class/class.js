// Class is syntactical sugar of constructor function
// https://www.youtube.com/watch?v=XskMWBXNbp0
// ----------------------- same as like constructor function -----------------------------
function Animal() {
    //this = Object.create(Animal.prototype)
    this.name = 'Arjun',
        this.age = 12
    // return this
}
Animal.prototype.
    eat = function (strength) {
        console.log('eating', strength)
    }
Animal.prototype.sleep = function () {
    console.log('sleeping')
}
Animal.prototype.run = function () {
    console.log('running')
}

let cat = new Animal('cat', 12)
let dog = new Animal('dog', 13)

console.log(Object.getPrototypeOf(cat)) //Animal { eat: [Function], sleep: [Function], run: [Function] }
console.log(Object.getPrototypeOf(dog)) //Animal { eat: [Function], sleep: [Function], run: [Function] }

// -----------------------------------------------------------------------------------
class Animal {
    constructor(name, age) {
        this.name = 'Arjun',
            this.age = 12
    }
    eat(strength) {
        console.log('eating', strength)
    }
    sleep() {
        console.log('sleeping')
    }
    run() {
        console.log('running')
    }

}

let cat = new Animal('cat', 12)
let dog = new Animal('dog', 13)

cat.sleep() //sleeping
cat.run() //running

// for in get all inherited and its own keys
// others object.keys(userobj) , Object.values(userobj) and Reflect.ownKeys(obj) gives only its own property
for (let key in cat) {
    console.log(key, cat[key]) // name ,age ,eat, sleep ,run
    if (cat.hasOwnProperty(key)) {
        console.log(key, cat[key]) // with own condition will print its own keys // name ,age
    }
}