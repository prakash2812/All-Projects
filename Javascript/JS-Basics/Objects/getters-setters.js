
// ------------------ objects getters and setters -------------------------------
// accessor properties 

let user = {
    firstName: 'arjun ',
    lastName: 'prakash',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ')
    }
}
console.log(user.fullName) // arjun prakash

user.fullName = 'john david'
// let desc = Object.getOwnPropertyDescriptors(user, Object.getOwnPropertyDescriptor(user))
console.log(user.fullName) // john david
/* {
    firstName: {
        value: 'john',
            writable: true,
                enumerable: true,
                    configurable: true
    },
    lastName: {
        value: 'david',
            writable: true,
                enumerable: true,
                    configurable: true
    },
    fullName: {
        get: [Function: get fullName],
            set: [Function: set fullName],
                enumerable: true,
                    configurable: true
    }
} */

// ------------------------------------------------------------------------------------
// for constructor we have to user ES5(define property) for getters
function User(name, birthday) {
    this.name = name
    this.birthday = birthday
    Object.defineProperty(this, 'age', {
        get() {
            return new Date().getFullYear() - this.birthday.getFullYear()
        }
    })
}

const data = new User('john', new Date(1994, 02, 15))
console.log(data.name, data.age);