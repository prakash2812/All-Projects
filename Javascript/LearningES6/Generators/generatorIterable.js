// ----------------------- use generators for iterables ----------------------------------------------------------------

// Objects are not iterables but if we use generators with Symbol.Iterator it will be an iterables 
let sequenceGenerators = {
    name: 'arjun',
    age: 12,
    *[Symbol.iterator]() {
        yield this.name // {value: 'arjun' done:false}
        yield this.age // {value:12 done: false}
    }
}


console.log(typeof sequenceGenerators) // Object
console.log([...sequenceGenerators])//['arjun', 12]

let [name1, age1] = [...sequenceGenerators]
console.log(name1, age1)//arjun 12

let { name, age } = sequenceGenerators
console.log('data', name, age)//arjun 12

console.log({ ...sequenceGenerators })


// We can loop over their values using for..of
for (let value of sequenceGenerators) {
    console.log(value) // arjun 12 
}


// ---------------------------- with out generators  -----------------------------
let range = {
    from: 1,
    to: 5,

    // for..of range calls this method once in the very beginning
    [Symbol.iterator]() {
        // ...it returns the iterator object:
        // onward, for..of works only with that object, asking it for next values
        return {
            current: this.from,
            last: this.to,

            // next() is called on each iteration by the for..of loop
            next() {
                // it should return the value as an object {done:.., value :...}
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// iteration over range returns numbers from range.from to range.to
alert([...range]); // 1,2,3,4,5