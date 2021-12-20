// Generators are functions which enters and exists multiple times
// function *f(..) or function* f(..)
//  Generator function returns an {} //Object [Generator] {}

//The main method of a generator is next(). When called, it runs the execution until the nearest yield
// Let’s call generator.next() again.It resumes the code execution and returns the next yield:

// It allocates memory at run times


function* generatorSequence() {
    yield 1
    yield 2
    yield 3
}

let gen = generatorSequence() // it doesn't invoke function it just return generator object i.e., Object [Generator] {}

//next() is always an object with 2 properties
gen.next()//{value:1,done:'false'} // It executes first/nearest yeld and return an object with 2 properties 
//gen.next().value // 1
gen.next()//{value:2,done:'false'} // It resumes the function execution and return next yeld with 2 properties 
gen.next()//{value:3,done:'false'} //  
gen.next()//{value:undefined,done:'true'} // It executes no yeld and return an object with 2 properties 

// -------------- generators are Iterable -------------------------------------------------------------------

// generators are iterable we can use in for of loop if we don't need to execute using next()
// We can loop over their values using for..of so we don't need to use next().value
for (let key of gen) {
    console.log(key)// 1 2 3 
}

// -------------- 
let generator = function* () {
    yield 1;
    yield 2
    return 3
}
let gen1 = [0, ...generator()] // [0,1,2,3]

let gen = generator();
console.log(gen.next())//{ value: 1, done: false }
console.log(gen.next())//{ value: 2, done: false }
console.log(gen.next())//{ value: 3, done: true }
console.log(gen.next())//{ value: undefined, done: true }
for (let item of gen) {
    console.log(item) // 1 2 but not 3 cause 
}
// It’s because for..of iteration ignores the last value, when done: true.So, if we want all results to be shown by for..of, we must return them with yield:

