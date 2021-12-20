// Generator composition is a special feature of generators that allows to transparently “embed” generators in each other.
// For generators, there’s a special yield* syntax to “embed” (compose) one generator into another.

function* sequenceGenerators(start, end) {
    for (let i = start; i <= end; i++) {
        yield i
    }
}

// Embed one generator in to another using yield*
let passwordGenerators = function* () {

    // for (let i = 48; i <= 57; i++) yield i;
    yield* sequenceGenerators(48, 57) // 0-9

    // for (let i = 65; i <= 90; i++) yield i;
    yield* sequenceGenerators(65, 90) //A-Z

    // for (let i = 97; i <= 122; i++) yield i;
    yield* sequenceGenerators(97, 122)//a-z
}



let str = ''

for (let item of passwordGenerators()) {
    str += String.fromCharCode(item)
}

console.log(str)//0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

// ----------------------------------------------------------------------------------------------
const developerTeam = {
    lead: 'Arjun',
    role: 'developer',
    *[Symbol.iterator]() {
        yield this.lead
        yield this.role
    }
}
const engineer = {
    /* dev: {
        lead: 'Arjun',
        role: 'developer',
        *[Symbol.iterator]() {
            yield this.lead
            yield this.role
        }
    }, */
    dev: developerTeam,
    size: 4,
    lead: 'arjun',
    manager: 'prakash',
    *[Symbol.iterator]() {
        yield this.lead
        yield this.manager
        yield* this.dev
    },


}

let gen = engineer[Symbol.iterator]()
console.log(gen.next().value)//arjun

for (let data of engineer) {
    console.log(data);
}
