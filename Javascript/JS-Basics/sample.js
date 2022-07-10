const length = 4;

const number = [];
for (var i = 0; i < length; i++);

number.push(i + 1)


console.log(number)

let user = {
    firstname: 'arjun',
    address: {
        street: 123,
        state: {
            name: 'karnataka',
            dist: 'bangalore'
        },
        phone: {
            mob: 123213,
            land: 2343341
        },

    },
    role: 'developer',
    salary: 1232
}

firstname arjun
address street 123
address state name karnataka
address state dist bangalore
address phone mob 123223
address phone land 980990
role developer
salary 1232

// (function foo(){
//   for(var i=0;i<5;i++){
//     setTimeout(((i)=>{
//       return function(){console.log(i)}
//       })(i),500)
//   }
// })()

// let data = [1,2,3,4]

// typeof STRING
// typeof Object

// let user ={}

// let user = new Object()




// if(Array.isArray(data)){
//   console.log('array')
// }else{
//   console.log('not an array')
// }



// foo();
// function foo(){
//   a = 2;
//   console.log(a); // 2
//   console.log(this.a);//2
// }
// var a = 4;
// console.log(a);//4


// -------------------------------------rest spread -----------------------------------------
/* There’s an easy way to distinguish between them:

When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list. */
// arguments are array like objects . it a in built object . only for regular functions
// arguments are old level spread operator
// arrow function doesn't have arguments


// --------------------------------Used objects, rest and spread , destructure ,---------------------------------------------
let user = {
    input: [4, -2, 4, 0, 6, -7.8, -6.2, -1]
}

function myfilter({ input: [...user] }) {
    return user.filter(item => Number.isInteger(item) && item > 0)
        .map(item => item * 2)
}

const varia = myfilter(user)
varia
// ----------------------------------------------------------------------------------------------------------------let user = {
const user = {
    info: [{ text: 'arjun' }],
    age: 28,
    name: { firstname: 'arya', lastname: 'geetha' }
}

function read(user) {
    return {
        ...user,
        info: [...user.info, { text: 123 }]
    }
}

console.log(read(user))
// -------------------------------------------------------------------------------------------------
//  used 3 array methods all together
// ---------------------------------------------------------------------------
let user = [4, -2, 4, 0, 6, -7.8, -6.2, -1]

user.filter(item => Number.isInteger(item) && item > 0)
    .map(item => item * 2).reduce((prev, curr) => prev + curr)

// ------------------------------ nested Objects destructuring-----------------------------------------

let subject = {
    name: { firstName: 'Arjun', lastName: 'prakash' },
    title: 'developer'


}

const { name: { firstName: name }, title } = subject
name
// ----------------------------------Object generator iterator------------------------------------------
/* const testingTeam = {
    lead: 'deepak',
    team: 'tita',
    *[Symbol.iterator]() {
        yield this.lead
        yield this.team
    }
} */

const engineer = {
    test: {
        lead: 'deepak',
        team: 'tita',
        *[Symbol.iterator]() {
            yield this.lead
            yield this.team
        }
    },
    // test:testingTeam
    size: 4,
    lead: 'arjun',
    manager: 'prakash',
    *[Symbol.iterator]() {
        yield this.lead
        yield this.manager
        yield* this.test
    }

}

for (let data of engineer) {
    console.log(data);
}
//_-----------------------------------------------------------------------------------------------



let user = [
    { name: 'arjun', title: 'Developer' },
    { name: 'prakash', title: 'Developer' },
    { name: 'arya', title: 'HR' }
]

const devUserName = () => user.find(item => item.title === 'Developer').name// return first item
const devUserName = () => user.filter(item => item.title === 'Developer')[0].name// return first array of item i.e., arjun
devUserName()

// const [, { data },] = user
// console.log(data);
// -----------------------------------------------------------------------------
let user1 = {
    name: ['arjun', 'prakash'],
    title: ['arjun', 'developer'],
}

const { name: [...rest] } = user1
console.log(rest);


const add = (...rest) => rest.reduce((prev, curr) => console.log(prev) || prev + curr, 0)
// console.log(add(1, 2, 3, 4, 5, 5, 5, 5))
// ------------------------------------------------------------------------------------------
const data = [

    ['arjun', 'Developer'],
    ['prakash', 'Manager'],

]

data.map(([name, title]) => ({ name, title }))
// --------------------------------Used objects, rest and spread , destructure ,---------------------------------------------
let user = {
    input: [4, -2, 4, 0, 6, -7.8, -6.2, -1]
}

function myfilter({ input: [...user] }) {
    return user.filter(item => Number.isInteger(item) && item > 0)
        .map(item => item * 2)
}

const varia = myfilter(user)
typeof varia

// -------------------------------------------------------------------------------------------------
//  used 3 array methods all together
// ---------------------------------------------------------------------------
let user = [4, -2, 4, 0, 6, -7.8, -6.2, -1]

user.filter(item => Number.isInteger(item) && item > 0)
    .map(item => item * 2).reduce((prev, curr) => prev + curr)

// --------------------------------- using reducer return object --------------------------------------------
let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];


function groupById(users) {
    return users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {})
}

let usersById = groupById(users);
console.log(usersById);

const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
    { name: 'bananas', type: 'fruit', quantity: 0 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 5 },
    { name: 'fish', type: 'meat', quantity: 22 },
];

const group = (type) => {
    return inventory.reduce((acc, curr) => {
        if (acc[curr[type]]) {
            acc[curr[type]].push(curr);
        } else {
            acc[curr[type]] = [curr];
        }
        return acc;
    }, {});
};
console.log(group('type'));
console.log(group('quantity'));
var foo = {
    a: 2,
    goo: function () {
        console.log('GO', this.a); //2
    },
    poo: () => {
        let a = 8;
        console.log('poo', this, this.a); //undefined
    },
};

var a = 4;
var context = {
    a: 6,
};
// foo.goo.call(context);

foo.poo.call(context);

var another_goo = foo.goo;
// another_goo();

var another_poo = foo.poo;
// another_poo();






