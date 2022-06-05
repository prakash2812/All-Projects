Array.prototype.mymap = function (fn) {
    let data = [];
    console.log(this.length);
    for (let i = 0; i < this.length; i++) {
        data.push(fn(this[i], i, this));
    }
    return data;
};
Array.prototype.myfilter = function (fn) {
    let data = [];
    console.log(this.length);
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) data.push(this[i]);
    }
    return data;
};
Array.prototype.myreduce = function (fn, init) {
    let accumulator = init;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? fn(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
};

/* let use = [1, 2, 3, 4];
let user = [];

const out1 = use.mymap((use) => use * 2);
const out2 = use.myfilter((use) => use > 2);
console.log(out1);
console.log(out2);

const out = user.myreduce((prev, cur, i, arr) => {
    prev = { ...cur };
    return prev;
}, {});
console.log(out); */

// =============== polyfill of deep cloning================================

let obj = {
    name: { firstname: 'arjun', lastname: 'prakash' },
    role: ['leader', 'developer'],
    title: 'Mr',
    mobile: { primary: 1231232, secondary: 324342 },
    add: function () {
        return 0;
    },
};

let in1 = deepClone(obj);
// let in1 = JSON.parse(JSON.stringify(obj));
let in2 = Object.assign({}, obj);
obj.mobile.primary = 12345678;
obj.title = 'DR';
obj.add = 'add';
obj.sub = () => {
    return 0;
};
in1.title = 'prof';
console.log(obj === in1);
console.log(in2 === obj);
console.log(in1);
console.log(in2);
console.log(obj);

/* function deepClone(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj) return obj; // primitives
    if (hash.has(obj)) return hash.get(obj); // cyclic reference
    const result =
        obj instanceof Set
            ? new Set(obj) // See note about this!
            : obj instanceof Map
            ? new Map(
                  Array.from(obj, ([key, val]) => [key, deepClone(val, hash)])
              )
            : obj instanceof Date
            ? new Date(obj)
            : obj instanceof RegExp
            ? new RegExp(obj.source, obj.flags)
            : obj.constructor
            ? new obj.constructor()
            : Object.create(null);
    hash.set(obj, result);
    return Object.assign(
        result,
        ...Object.keys(obj).map((key) => ({ [key]: deepClone(obj[key], hash) }))
    );
} */
function deepClone(data) {
    const isArray = (arr) => Array.isArray(arr);
    const isObject = (obj) => typeof obj === 'object' && obj !== null;

    if (isArray(data)) {
        const newArr = [];
        for (let value of data) {
            if (isArray(value) || isObject(value)) {
                newArr.push(deepClone(value));
            } else newArr.push(value);
        }
        return newArr;
    } else if (isObject(data)) {
        const newObj = {};
        for (let key of Object.keys(data)) {
            let element = data[key];
            if (isArray(element) || isObject(element)) {
                newObj[key] = deepClone(element);
            } else newObj[key] = element;
        }
        return newObj;
    }

    return data;
}

let str = '0 - 22 1985--324';
let fresh = str.replace(/[^A-Z0-9]+/gi, '');
console.log('fresh---------------', fresh);
