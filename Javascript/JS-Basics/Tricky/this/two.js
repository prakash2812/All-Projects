function show() {
    let user = {
        name: 'arjun',
        age: 12,
        parent: function () {
            console.log('parent', this)
            console.log(this.name)
        },
        child: {
            parent1: function () {
                console.log('parent1', this)
                console.log(this.name)
            }
        }
    }

    user.parent()
    user.child.parent1()
}
show()
// -----------------------------------------
function show() {
    let user = {
        name: 'arjun',
        age: 12,
        parent: () => {
            console.log('parent', this)
            console.log(this.name)
        },
        child: {
            parent1: () => {
                console.log('parent1', this)
                console.log(this.name)
            }
        }
    }

    user.parent()
    user.child.parent1()
}
show()

// ----------------------------------------------------------------


let user = {
    name: 'arjun',
    age: 12,
    parent: () => {
        console.log('parent', this) // {}
        console.log(this.name)
    },
    child: {
        parent1: () => {
            console.log('parent1', this) //{}
            console.log(this.name)
        }
    }
}

user.parent()
user.child.parent1()
// --------------------------------------

let user = {
    name: 'arjun',
    age: 12,
    parent: function () {
        console.log('parent', this) // user
        console.log(this.name)
    },
    child: {
        parent1: function () {
            console.log('parent1', this) // child
            console.log(this.name)
        }
    }
}

user.parent()
user.child.parent1()

