// ---------------------------------------- nullish coalescing operator (??) --------------------------------------
// || return first truthy value
//  ??return first defined value so if it have null and undefined it ignores and prints whatever it is

let name = 'arjun'
let role = ''

console.log(name ?? 'stranger'); // arjun
console.log(role ?? 'Developer') // ''
console.log(null ?? undefined ?? name) // arjun

// ----------------- optional chaining (?.) ------------------------------------------------------------------
let user = {
    name: {
        firstName: 'arjun',
        lastName: 'prakash',
        age: 30,
        role: 'developer'
    }
}


console.log(user?.name?.id);// undefined // if user is not null and undefined then it check second value like same
console.log(user?.name?.id)// 'id is not a property key in user object'); // id is not a property key in user object
console.log(user.name?.lastName) // prakash
console.log(user.name && user.name.age && user.name.id) // instead this duplicate check up we will use optional chaining


