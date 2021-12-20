let user = {
    name: 'arjun',
    age: 23,
    show: function () {
        console.log(this)
        console.log(this.name)
        setTimeout(function () {
            console.log(this) // settime out
            console.log(this.name)
        }, 100)
    }
}

user.show()

// ----------------------------------------------------------------
let user = {
    name: 'arjun',
    age: 23,
    show: function () {
        console.log(this) // user
        console.log(this.name)
        setTimeout(() => {
            console.log(this) // user
            console.log(this.name)
        }, 100)
    }
}

user.show()

// -----------------------------

let user = {
    name: 'arjun',
    age: 23,
    show: () => {
        console.log(this) // {}
        console.log(this.name)
        setTimeout(() => {
            console.log(this) //{}
            console.log(this.name)
        }, 100)
    }
}

user.show()
// --------------------------
let user = {
    name: 'arjun',
    age: 23,
    show: () => {
        console.log(this) //{}
        console.log(this.name)
        setTimeout(function () {
            console.log(this) // settimeout
            console.log(this.name)
        }, 100)
    }
}

user.show()