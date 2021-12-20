// call,apply,methods are methods/properties of function

let user = {
    firstName: 'arjun',
    lastName: 'prakash',
    showFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    /*  get fullName() {
         return `${this.firstName} ${this.lastName}`
     },
     set fullName(value) {
         [this.firstName, this.lastName] = value.split(' ')
     } */
}

const person = {
    firstName: "john",
    lastName: 'david'
}

function labDetails(hometown, id) {
    return `${this.firstName} ${this.lastName} from ${hometown} with ${id}`
}

const labDetails = (params) => {

}


// function borrow // call used when we required function borrow
// call invoke the function directly by passing the reference which points to the this variable inside the method
console.log(user.showFullName())// arjun prakash
console.log(user.showFullName.call(person))// john david

console.log(labDetails.call(person, 'bng', 28)) // john david
console.log(labDetails.call(user, 'hyd', '82')) // arjun prakash

// apply is same as call but just we can pass param as array
console.log(labDetails.apply(person, ['bng', 28])) // john david
console.log(labDetails.apply(user, ['hyd', 82])) // arjun prakash


//bind takes reference of function so that we can invoke later
// bind method binds the function with obj and return the copy of that method
console.log(labDetails.bind(person, ['delhi', 32]))
console.log(labDetails.bind(user, ['punjab', 34]))

// ----------------------- polyfill bind ----------------------------------------------------------------

//  polyfill is just when browser is not up dated with new feature and how we do write our own 

// lets create our own bind 

const user = {
    firstName: "arjun",
    lastName: 'prakash'
}

let showFullName = function (hometown, country, role) {
    // console.log(`${this.firstName} ${this.lastName}`)
    // console.log(hometown)
    return (`${this.firstName} ${this.lastName} ${hometown} ${country} ${role}`)
}

// let shown = showFullName.bind(user)
// console.log(shown())

Function.prototype.ownBind = function (...args) {
    let obj = this
    const params = args.slice(1)
    console.log(params)
    return function (...args2) {
        console.log(...args2)
        console.log(args[0], [...params])
        return obj.apply(args[0], [...params, ...args2])
    }
}

let myOwn = showFullName.ownBind(user, 'bang', 'india')
// console.log(myOwn());
console.log(myOwn('developer'));
// myOwn()

// ------------------------------------------------------------------------
