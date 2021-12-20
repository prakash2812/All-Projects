// arrays are used to store ordered collections but objects are store in key value collection of data
// array can store any element of any type
//  arrays are object i.e, arr[0] same as obj.key or obj[key]

let arr = new Array()
let arr = []
// ----------------------------------------------------------------------
// mix of values
let arr = ['Apple', { name: 'John' }, true, function () { console.log('hello') }]

// get the object at index 1 and then show its name
console.log((arr[1].name)); // John

// get the function at index 3 and run it
arr[3](); // hello

// we  can add data in to array 
arr[4] = 'aryan'

arr.length = 0 // it will make arr =[] empty truncate the array using lenght assignment

// ----------------------------------- Array methods ------------------------------
//  LIFO for stack   -- push/pop  -- end of array -- fast performance 
// FIFO for queque  -- shift/unshift -- begin of array -- slow performance cause it have to adjust all array elements 
//  in js Array have both feature so called "deque"


//  ----->methods that work with the end/begin of array 
let arr = ['arjun', 1, 2, { id: 1 }];
//  push/unshift add elemetns at end/begin of arrays
arr.push('prakash') // 5
arr[arr.length] = 'david' //david
arr.unshift(123) // 7 //[123,'arjun', 1, 2, { id: 1 },'prakash','david']

// pop/shift extracts/remove element from end/begin of arrays
arr.pop() // david //[123,'arjun', 1, 2, { id: 1 },'prakash']
arr.shift() // 123 //['arjun', 1, 2, { id: 1 },'prakash']
// ----------------------------------- methods ----------------------------------------------------------------

//  -------------- splice ------------------
// splice(will be removed value, how many count u want to remove)
// It can do everything: insert, remove and replace elements.
// splice return an array of remove elementss but it also effects to original array
let data = ['Arjun', 'prakash', "arya", 'krishna']

// delete data[0]
// console.log(data); 
// console.log(data.length); //4

console.log(data.splice(0, 2));//[ 'Arjun', 'prakash' ]
console.log(data);//[ 'arya', 'krishna' ]
console.log(data.length);//2
console.log(data.splice(1, 0, 'arjun', 'prakash'))
console.log(data);//[ 'arya', 'arjun', 'prakash', 'krishna' ]

// --------- slice -------------------------------
// return an array (clone) with out effecting on original array
let data1 = ['Arjun', 'prakash', "arya", 'krishna']
let data = data1.slice()//['Arjun', 'prakash', "arya", 'krishna']
console.log(data, data1)//['Arjun', 'prakash', "arya", 'krishna']
console.log(data1.slice(0, 2)); // ['Arjun','Prakash']
console.log(data1); //['Arjun', 'prakash', "arya", 'krishna']
// ------------ concat ----------------------------------
// return a new array(clone) with out effecting on original array
// return an array that includes values from other arrays and additional items
// it takes arguments arrays or values 

let arr = [1, 2]
let newArr = arr.concat([3, 4], 5, 6)
console.log(newArr);//[1,2,3,4,5,6]
console.log(arr); //[1,2]
arr.concat({ id: 1 })//[1,2,{id:1}]

let obj = {
    0: 1,
    1: 123,
    // [Symbol.isConcatSpreadable]: true,
    // length: 2
}
console.log(arr.concat(obj));//[ 1, 2, { '0': 1, '1': 123 } ]
console.log(arr.concat(obj));//[1,2,1,123] // if u use Symbol and length

// ------------------------ search array methods ---------------------------
//  arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax and do essentially the same as their string counterparts,
// but operate on items instead of characters

let arr = [1, 2, 3]
arr.indexOf(1)// 0 
arr.indexOf(0) // -1
// indexOf(value, search index from) // index(1,1) // search value 1 from index 1
arr.lastIndexOf(3)//2
arr.includes(2) // true


let arr = [
    { id: 1, name: 'arjun' },
    { id: 1, name: 'arya' },
    { id: 3, name: 'arjun' },
]

// if true is returned, item is returned and iteration is stopped
// for falsy scenario returns undefined
// let data= arr.find(function(item,index,array){})
console.log(arr.find(item => item.id == 1))//{id:1,name:'arjun'}
console.log(arr.find(item => item.id == 4))// undefined

//if true: find index return its index and iteration stopeed
// for false return -1
console.log(arr.findIndex(item => item.name == 'arya')); // 1
console.log(arr.findIndex(item => item.name == 'arjunqwe')); // -1

// if true: filter return item to the array and continues the iteration until the condition satisfied for all elements
// if falsy return empty array []
console.log(arr.filter(item => item.id >= 3)); // [{id:3,name:'arjun'}]

//---------------------------- transform methods -----------------------------------------------------
//  transform and reorder an array 

let arr = [1, 12, 3, 14]
//  map call funciton for each iteration of element and returns the new Array
console.log(arr.map(item => item * 2));//[2,24,6,28]

console.log(arr.sort());//[1,12,14,3] // cause its converts in to strings (toString()) and compare two string "1" "12"
console.log(arr.sort((a, b) => a - b));

let arr = [1, 12, 3, 14]
console.log(arr.reverse());
console.log(arr);//14,3,12,1
let user = 'i am new developer'
// split in to array and join in to string vice versa
console.log(user.split('').reverse().join(" "));
console.log(user);

// Join creates a string of arr items joined by glue
console.log(arr.join(':'))

// ----------- reducer -----------------------------------------------------------------------------------------
// They are used to calculate a single value based on the array.
let value = arr.reduce(function (accumulator, item, index, array) {
    // ...
}, [initial]);

let user = [1, 2, 3, 4]
console.log(user.reduce((prev, curr) => prev + curr));
console.log(user.reduceRight((prev, curr) => prev + curr));

let user = {
    salary: 123,
    id: 123
}

console.log(user.reduce((prev, curr) => prev + curr, []));

// The method arr.reduceRight does the same, but goes from right to left.
// -------------------------------- fill --------------------------------------------------------------------------------
const array1 = [1, 2, 3, 4];
// fill changes all array elements in to static 
// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));// expected output: [1, 2, 0, 0]
// --------------flat --------------------
// arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.
// The flat() method creates a new array with all sub - array elements concatenated into it recursively up to the specified depth.
const arr = [1, 2, [3, 4]];

// To flat single level array
arr.flat();
// is equivalent to
arr.reduce((acc, val) => acc.concat(val), []);// [1, 2, 3, 4]

// --------------------------Flat and Flat Map ------------------------------------------------------------------------
const arr = [1, 2, [3, 4], [[[[[[2]]]]]]];
// console.log(arr.flat(1)) // one depp level // conversion of multi dimensional array to single array
console.log(arr.flat(Infinity)) //[1,2,3,4,2] // if we r not sure how deep it is use infinity

let user = [1, 2, 3]
let data = ['one', 'two', 'three']

const map1 = user.map((item, index) => [item, data[index]])
console.log(map1); // [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
const flatmap1 = user.flatMap((item, index) => [item, data[index]])
console.log(flatmap1) //[ 1, 'one', 2, 'two', 3, 'three' ]
// ----------------------------- copWithin -------------------------------------------------------------------------
// copyWithin will effect the original array
//copyWithin(target, start,end) // don't include end
// keep start and end data in target
// if we don't give start and end it will consider full array from 0 index to length-1
let say = ['arjun', 'aryan', 'prakash', 'githa', 'preethi']
say.copyWithin() // ['arjun', 'aryan', 'prakash', 'githa', 'preethi']
say.copyWithin(0) //["arjun", "aryan", "prakash", "githa", "preethi"]
say.copyWithin(1) // ["arjun", "arjun", "aryan", "prakash", "githa"]
say.copyWithin(1, 3, 4) //["arjun", "githa", "prakash", "githa", "preethi"]
// ---------------------------------------------------------------------------------------

