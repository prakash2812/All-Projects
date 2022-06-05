// Objects are entities which have properties and methods or functions.
// objects/arrays are reference data types means copied the reference(memory allocation) not values
// objects have two properties i.e., data properties , accesor properties
let obj = {};
let obj = new Object(); //{}
// --------------------------------------------------------------------------------------
let user = {
    name: 'arjun',
    age: 25,
    users: ['Hr', 'Developer'],
    roles: {
        role: 'developer',
        salary: 123,
    },
    draw: function () {
        // old format
        console.log(user.name);
    },
    draw() {
        //new format
        console.log(user.age);
    },
};

let anotherUser = user;
// true we just copied the reference memory.. anotherUser-->{}<--user
console.log(user === anotherUser); //true

// this ceates a new reference to new object values
let data = Object.assign({}, user);

//false cause its a new seperate obj reference, means cloned .. data-->{} and user-->{}
console.log(data === user); //false

// true because deep cloning, we have objects and arrays , they will have same object reference
console.log(user.roles === data.roles); //true

// let data = _.cloneDeep(user)
console.log(user.roles === data.roles); // false due to deep cloning not happened
// --------------------------------------------------------------------------------------------

const a = {};
const b = {};

//false even it have same values but reference data types works on reference
// it creates two different reference a-->{} b-->{}
console.log(a === b);
// ---------------------------------------------------------------------------------------
let obj = {
    name: 'arjun',
    values: [1, 2, 3],
    sum: { id: 123, age: 23 },
};

let obj1 = { ...obj };
console.log(obj === obj1); //false

obj.name = 'prakash';
obj.values.push(4);
obj.sum.id = 128;
console.log(obj1); // { name: 'arjun', values: [ 1, 2, 3, 4 ], sum: { id: 128, age: 23 } }
console.log(obj); //--->{ name: 'prakash', values: [1, 2, 3, 4], sum: { id: 128, age: 23 } }
console.log(obj.values === obj1.values); // true cause deep cloning is not happened
console.log(obj.sum === obj1.sum); // true cause deep cloning is not happened
// ------------------------------------- Object methods ----------------------------------------

const veg = {
    apple: 2,
    grapes: 4,
    orange: 5,
};

// convert object keys as array data
const objKeysToArray = Object.keys(veg);
console.log(objKeysToArray); // [apple,grapes,orange]

// convet object values To array data
const objValuesToArray = Object.values(veg);
console.log(objValuesToArray); // [2,4,5]

// convert object key and values To array data
const objKeyValuesToArray = Object.entries(veg);
console.log(objKeyValuesToArray); // [[apple,2],[grapes,4],[orange,5]]

// convert Array in in to Object
const fromEntries = Object.fromEntries(
    objKeyValuesToArray.map(([key, value]) => [key, value * 2])
);
console.log(fromEntries); // {apple:4,grapes:8,orange:10}

// -----------------------------------------------------------------------------------------------
let user = {
    name: 'arjun',
    age: 23,
};

console.log(Reflect.ownKeys(user)); // ['name','age'] // just like
// --------------------------------------------------------------------------------------

console.log(Reflect.ownKeys(person)); // it prints only own keys of obj

for (let key in person) // it prints all inherit key also
    console.log(key);

// ------------------- obj inbuilt property related methods ----------------------------------------------------
let obj = {
    name: 'arjun',
    age: 30,
};
Object.defineProperty(obj, 'name', {
    value: 'aryan',
});

/* Object.defineProperties(obj, {
    name: { value: 'arjun', writable: true, enumerable: true, configurable: true },
    age: { value: 30, writable: true, enumerable: true, configurable: true }
}) */

let des = Object.getOwnPropertyDescriptor(obj, 'name');

// let des = Object.getOwnPropertyDescriptors(obj, Object.getOwnPropertyDescriptor(obj))
console.log(des); //expected output
/* {
    value: 'aryan',
        writable: true,
            enumerable: true,
                configurable: true
} */
// ---------------------------- --------------------------------------------------------
//  for new property , default are falsy
let data = {};
Object.defineProperty(data, 'name', {
    value: 'prakash',
});
let datadesc = Object.getOwnPropertyDescriptor(data, 'name');
console.log(datadesc); // expected out put
/* {
value: 'prakash',
    writable: false,
        enumerable: false,
            configurable: false
} */
// ----------------------------------------------------------------------
let obj = {
    name: 'arjun',
    age: 30,
};
//  preventExtension forbid(don't allow) the new object properties
Object.preventExtensions(obj);
obj.id = 123;
console.log(obj); //{ name: 'arjun', age: 30 }
console.log(Object.isExtensible(obj)); //false

// forbid adding/remove/writeable of properties that
// Sets configurable: false, writable: false for all existing
Object.freeze(obj);
obj.id = 28;
obj.name = 'prakash';
delete obj.age;
console.log(obj);

console.log(Object.isFrozen(obj));
// ---------------------------------------------------------
/* Object.preventExtensions(obj)
Forbids the addition of new properties to the object.
    Object.seal(obj)
Forbids adding / removing of properties.Sets configurable: false for all existing properties.
    Object.freeze(obj)
Forbids adding / removing / changing of properties.Sets configurable: false, writable: false for all existing properties.
And also there are tests for them:

    Object.isExtensible(obj)
Returns false if adding properties is forbidden, otherwise true.
    Object.isSealed(obj)
Returns true if adding / removing properties is forbidden, and all existing properties have configurable: false.
    Object.isFrozen(obj)
Returns true if adding / removing / changing properties is forbidden, and all current properties are configurable: false, writable: false. */

// ------------------------------draw backs of objects , but Map will avoid those ------------------------------------
let map = {};

let obj1 = {};
let obj2 = {};

map.obj1 = 'hello';
console.log(map.obj1); // hello
console.log(map.obj2); // undefined
console.log(obj1.toString(), obj2.toString());

map[obj1] = 'hello';
console.log(map[obj1]); // hello
console.log(map[obj2]); // hello
console.log(map); // {'[Object-Object]': 'hello'}
console.log(obj1.toString(), obj2.toString());

// because obj1 and obj2 string representation are same when we use []

console.log(map); // { obj1: 'hello', '[object Object]': 'hello' }

// ------------------------------------Reflect - dynamically chose object like proxy ------------------------------------------
// https://www.youtube.com/watch?v=X7qXJRU6qyM&list=PLyuRouwmQCjkYdv4VjuIbvcMZVWSdOm58&index=154

// Reflect Object - built-in object that provides methods for interceptable JavaScript operations
// All methods are static
// has no constructor cannot use `new`
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
const log = console.log;

let alex = {
    name: 'Alex',
    id: 93,
    hello: function (a, b) {
        console.log(`Hello my name is ${this.name}. ${a} ${b}`);
    },
};

log(Reflect.ownKeys(alex));
log(Reflect.get(alex, 'id'));
log(Reflect.set(alex, 'id', 94));
log(Reflect.get(alex, 'id'));
log(Reflect.has(alex, 'name'));
Reflect.apply(alex.hello, alex, Reflect.ownKeys(alex));
Reflect.defineProperty(alex, 'age', { value: 30, enumerable: false });
log(Reflect.get(alex, 'age'));

/**
Reflect.apply(targetFunc, thisArg, argList); //for functions
Reflect.get(target, key, handler); //handler is Proxy. get the value of a property
Reflect.set(target, key, value, handler); //handler is Proxy. set the value of a property
Reflect.has(target, key); // check if it has a property
Reflect.delete(target, key); //like the delete operator
Reflect.ownKeys(target); // enumerate through the properties
Reflect.defineProperty(target, key, {propertyDescriptor}); //like Object.defineProperty
 */
