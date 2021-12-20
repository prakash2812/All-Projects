// Syntax differences between async and regular iterators:
/*
                                        Iterators	      Async iterators
Object method to provide iterator	Symbol.iterator	  Symbol.asyncIterator
next() return value is            	any value	      Promise
to loop, use	                    for..of         for await..of

*/
// --------------------------------------------------------------------------------

// Syntax differences between async and regular generators:
/* 
                                     Generators	                         Async generators
Declaration	                         function*                         async function*
next() return value is	        { value: …, done: true / false }    Promise that resolves to { value: …, done: true / false }

*/

// ------------------- async iterables --------------------------------------------------------------------

let developmentTeam = {
    from: 1,
    to: 5,
    [Symbol.asyncIterator]() {
        // const [start, end] = [this.from, this.to]
        return {
            start: this.from,
            end: this.to,
            async next() {
                await new Promise((resolve, reject) => {
                    setTimeout(resolve, 1000)
                })
                if (this.start <= this.end) {
                    return { value: this.start++, done: false }
                }
                else {
                    return { done: true }
                }
            }
        }
    }
};

(async () => {
    for await (let value of developmentTeam) {
        console.log(value)
    }
})()
// ----------------------------------------------------------
let developmentTeam = {
    from: 1,
    to: 5,
    async *[Symbol.asyncIterator]() {
        // const [start, end] = [this.from, this.to]
        for (let i = this.from; i <= this.to; i++) {
            await new Promise((resolve, reject) => {
                setTimeout(resolve, 1000)
            })
            yield i
        }
    }
};

(async () => {
    for await (let value of developmentTeam) {
        console.log(value)
    }
})()


// ------------------------------ async generators ----------------------------------------------------------

async function* sequenceGenerators(start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        yield i
    }
}

(async () => {
    // let gen = sequenceGenerators(1, 5)
    for await (let value of sequenceGenerators(1, 5)) {
        console.log(value)
    }
})()