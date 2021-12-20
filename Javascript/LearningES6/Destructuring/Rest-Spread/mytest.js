// const data = [1, 2, 3, 4, 5]

// console.log(data.reduce((prev, curr) => curr, []))

let user = {
    info: [{ text: 'arjun' }],
    age: 28,
    name: { firstName: 'arya', lastName: 'geetha' }
}

function read(user) {
    return {
        ...user,
        info: [...user.info, { text: 123 }]
    }
}

console.log(read(user))