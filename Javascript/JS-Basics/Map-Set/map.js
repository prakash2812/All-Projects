// -------------------------- ------
// Map is similar to regular objects , but we can give key as any time
/* Map – is a collection of keyed values.
// Insertion order is same as retrieving order(ordered list)


// Iterables objects can be array or strings

Methods and properties:

new Map([iterable]) – creates the map, with optional iterable(e.g.array) of[key, value] pairs for initialization.
    map.set(key, value) – stores the value by the key.
        map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
            map.has(key) – returns true if the key exists, false otherwise.
                map.delete(key) – removes the value by the key.
                    map.clear() – removes everything from the map.
                        map.size – returns the current element count.
The differences from a regular Object:

Any keys, objects can be keys.
Additional convenient methods, the size property. */
let market = new Map()
market.set({}, 123)
market.set('id', 12)
market.set(12, 102)

console.log(market)

let superMarket = new Map([[{}, 'arjun'], ['age', 28]])
console.log(superMarket)

// chaining set in map
market.set(1, 'arjun').set(2, 'aryan').set(3, {}) // {1 => "arjun", 2 => "aryan", 3 => {…}} // return iterable object map

Object.fromEntries(market) // {1: "arjun", 2: "aryan", 3: {…}} // convert Object from Map

// ---------------------------------------------------
let obj = {
    name: 'arjun',
    age: 23
};
let superMarket = new Map(Object.entries(obj)) // convert map from object

// -------------------------------------------
// -------------- Anagram --------------------------
// Anagrams are words that have the same number of same letters, but in different order.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let obj = {}
    // let obj = new Map()
    for (let word of arr) {

        let sorted = word.toLowerCase().split('').sort().join('')
        console.log(word, sorted)
        obj[sorted] = word
        console.log(obj)
        // map.set(sorted, word)
    }
    // return Array.from(map.values())
    return Object.values(obj)
}

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

// -------------------------------------------------------------------------------------------

