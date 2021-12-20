//  set is a set of values which are unique across
//  it just verifies values but arrays we can access elements 
// Set can take iterable objects like Arrays or strings
// If u want convert array like objects in to Iterable then use Array.from
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
// Insertion order is same as retrieving order(ordered list)


// let person = new Set(Array.from({ 0: 'arjun', 1: 123, length: 2 }))
// console.log(person) // {'arjun',123}

/* Set – is a collection of unique values.

Methods and properties:

new Set([iterable]) – creates the set, with optional iterable(e.g.array) of values for initialization.
    set.add(value) – adds a value(does nothing if value exists), returns the set itself.
        set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
            set.has(value) – returns true if the value exists in the set, otherwise false.
                set.clear() – removes everything from the set.
                    set.size – is the elements count.
Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number. */

let user = new Set()

// chaining add in set
user.add({ name: 'arjun', age: 89 }).add('hunter').add(1)

console.log(user);//Set { { name: 'arjun', age: 89 }, 'hunter', 1 }
let person = new Set([8, 9, 10, 12])
// let string = new Set(String('arjun')) // {'a','r','j','u','n'}

console.log(typeof person) //object
console.log("keys ", person.keys()) //keys  [Set Iterator] { 8, 9, 10, 12 }
for (let item of person.keys()) {
    console.log(item) // 8, 9, 10, 12

}
console.log("values ", person.values()) // values[Set Iterator] { 8, 9, 10, 12 }
console.log("entries ", person.entries()) // entries[Set Entries] { [8, 8], [9, 9], [10, 10], [12, 12] }
console.log(person) // Set { 8, 9, 10, 12 }

// ----------------------------------------------------------------------------------------
/*set.keys() – returns an iterable object for values,
set.values() – same as set.keys(), for compatibility with Map,
set.entries() – returns an iterable object for entries[value, value], exists for compatibility with Map. */

// Always forget what you give and never forget to forgive
// ----------------------------------------------------------------------------
// There’s a universal method Array.from that takes an iterable or array - like value and makes a “real” Array from it.Then we can call array methods on it.
// Array.from(obj[, mapFn, thisArg])
// The optional second argument mapFn can be a function that will be applied to each element before adding it to the array, and thisArg allows us to set this for it.
function unique(arr) {
    /* your code */
    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)) // [ 'Hare', 'Krishna', ':-O' ]

// ----------------------------------------------------------------------------------


// ---------------------------------- weak set -------------------------------------------
// In weakset memory is handled properly (once reference null it will clear all garbage of reference)
//  if we need track references of objects then go with weak sets
// we can pass only key as objects , other type are not acceptable

let user = new Set();

let key = {}
user.add(key)

key = null // key goes to garbaze but user ref is still have {}
console.log(user) // Set {{}}
console.log(user.size) // 1

let person = new WeakSet() // it takes only objects as keys/values
key = {}
person.add(key)
key = null // it go to garbaze and also person object becomes empty
console.log(person)//WeakSet { <items unknown> }
console.log(person.size) // undefin