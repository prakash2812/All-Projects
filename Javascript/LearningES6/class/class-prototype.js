// ----------------------- with classes ------------------------------------

class Employee {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getDetails() {
        return `${this.name} :: ${this.age}`
    }
}
class Person extends Employee {
    constructor(name, age, role) {
        super(name, age)
        this.role = role
    }
    getDesignation() {
        return `${this.role} :: ${this.name} :: ${this.age}`
    }
}

let person = new Person('arjun', 23, 'developer')
console.log(person.getDesignation())
console.log(person.getDetails())
// ---------------------------- with prototype --------------------------------

function Employee(name, age) {
    this.name = name
    this.age = age

}

Employee.prototype.getDetails = function () {
    return `${this.name} :: ${this.age}`
}

function Person(name, age, role) {
    Employee.call(this, name, age)
    this.role = role
}

// Object.setPrototypeOf(Person.prototype, Employee)
Person.prototype = Employee.prototype
Person.prototype.constructor = Person

Person.prototype.getDesignation = function () {
    return `${this.name} ${this.age} ${this.role}`
}

let person = new Person('arjun', 23, 'developer')
console.log(person.getDesignation())
console.log(person.getDetails())

let employee = new Employee('arjun', 14)
console.log(employee.getDetails())
// person.getDetails()