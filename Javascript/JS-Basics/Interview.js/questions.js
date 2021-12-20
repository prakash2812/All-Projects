// ---------------------------------------------------------------------------------------
function add() {
    // var works at function level scope
    //for ran 5 times
    //  setTimeOut executes with i =5 
    //  
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log('first inside loop ', i);

        }, 0)
    }
    // let works at block scope so j is associate with 5 times of set time out
    for (let j = 0; j < 5; j++) {
        setTimeout(() => {
            console.log('second inside loop ', j);
        }, 0)
    }
}

add();
// -----------------------------------------------------------------------------------------
let name = 'arjun'
const user = (asd) => {

}

const promise = new Promise((resolve, reject) => {

});
function showName() {
    setTimeout(() => {

    }, 0)
}

showName()
name = 'prakash'

// ------------------------------------------------------------------------------------------------
let user = ['1', '2', '3', '4']
user.map(parseInt) // [1,NaN,NaN,NaN]

// parse have two param , string and radix so that ("1",0) return 1
// ('2',1) return NaN // cause due to some rules of octagonal of radix of parse int
// ------------------------------------------------------------------------------------------------
function tryMe() {
    try {
        // console.log('in try');
        throw "would you se it"
    } catch (error) {
        // console.log('in catch');
        throw 'i hope not'
    } finally {
        return
    }
}
// due to stack it return the fifo so we get undefined //in finally it return undefined
tryMe()
// ------------------------------------------------------------------------------------------------
Math.max() // - Infinity
Math.min() // Infinity

// ------------------------- return a name who is having max salary if not null ----------------------
let user = {
    john: 123,
    max: 23,
    mike: 300,
    david: 299
}
function highPaidPerson(user) {
    let max = 0
    let maxName = null
    for (let [name, salary] of Object.entries(user)) {
        if (salary > max) {
            max = salary
            maxName = name
        }

    }
    return maxName
}

highPaidPerson(user)
// --------------------------------------------------
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
// ----------------------------------------------------------------------------------------------
a = [10, 12, 15, 21]
for (var i = 0; i < a.length; i++) {
    setTimeout(() => {
        console.log(i)
    }, 100)
}
for (let j = 0; j < a.length; j++) {
    setTimeout(() => {
        console.log(j)
    }, 100)
}
for (var k = 0; k < a.length; k++) {
    setTimeout(function (x) {
        return function () {
            console.log(x)
        }
    }(k), 100)
}

// -------------------------- factorial and fibonacii --------------------------------------------
// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 614 987 1597
// a b c 
//   a b

// 1 2 3 4 5 6 7  8  9 10 11 
const fact3 = (num) => {
    let result = (num < 2) ? num * fact3(num - 1) : num
    console.log(result)
    /*  let initial = 1;
     let result = initial
     for (let i = 2; i <= num; i++) {
         result = i * result
     }
 
     console.log(result)  */
}

fact3(4)
// fact3(1)
// fact3(99)



const fact1 = (num) => {
    let a = 0
    let b = 1
    for (let i = 3; i < num + 1; i++) {
        let c = a + b;
        [a, b] = [b, c]
    }
    console.log(b)
}

fact1(6)
fact1(4)
fact1(52)



const fact = (num) => {
    let arr = [0, 1]
    for (let i = 2; i <= num; i++) {
        let c = arr[i - 1] + arr[i - 2];
        arr.push(c)
    }
    console.log(arr)
}


fact(3) //1
fact(6) //5
fact(9876)

// =========================== use memo =================================
// 1 2 3 4 5 6 7  8  9 10 11 

// will take an empty array and store it if it matched the input para again it return the stored value
let prevData = []
const fact3 = (num) => {
    // return (num < 2) ? num : fact3(num - 2) + fact3(num - 1)
    if (prevData[num]) {
        return prevData[num]
    }
    let initial = 1;
    let result = initial
    for (let i = 2; i <= num; i++) {
        result = i * result
    }
    prevData[num] = result
    console.log('not from memory')
    return result
}

console.log(fact3(1))
console.log(fact3(10))
console.log(fact3(10))

// -----------------------best approach of fibonacii ------------------------------
let old = []
const fact = (num,) => {

    if (old[num]) {
        return old[num]
    }
    let a = 0
    let b = 1
    for (let i = 2; i <= num; i++) {
        let c = a + b;
        [a, b] = [b, c]
    }
    old[num] = b
    return b

}

console.log(fact(6)) // 8 
console.log(fact(15)) //610
console.log(fact(15)) // 610 // comes from store memory
// ------------------------- i want group of 3 ------------------------------

let name = 'i am an engineer'
let word = name.split(' ').join('')


function splitWords(num) {
    let newArr = []
    let initial = 0
    for (let i = 0; i <= (word.length / num); i++) {
        newArr.push([...word].splice(initial, num))
        initial += 3
    }
    return newArr
}
console.log(splitWords(3))
for (let key of splitWords(3)) {
    console.log(...key)
}

// ===============================90 degree Rotation ======+++++++++++
/* /* Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]] */

/* Input
1 2 3
4 5 6
7 8 9

Output:
7 4 1
8 5 2
9 6 3 */

const rotation = mat => {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < i; j++) {
            const tmp = mat[i][j];
            console.log(tmp);
            mat[i][j] = mat[j][i];
            mat[j][i] = tmp;
        }
    }
    return mat;
}
let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let newArray = rotation(array);
console.log(newArray)
let result = newArray.map(item => item.reverse());
console.log(result)
// ============================================================================

// “hello”.generate_str(3);

// hellohellohello

String.prototype.generate_str = function (num) {
    let input = this;
    console.log('om', input);
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(...Array.from(input));
    }
    return arr.toString().split(',').join('');
}

// =================================================================================================

let data = [-1, 2, -3, 4, 5, 6, -7, 8, 9]
// [2, 4, 5, 6, 8, 9, -1, -3, -7]

// [1,3,5,2,7,4,8,9]---- input
// [9,1,8,2,7,3,5,4]---- output


function integers(data) {
    let newArr = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] < 0) {
            var newValue = data.splice(i, 1);
            newArr.push(...newValue);
        }
    }
    return data.concat(newArr);
}

console.log(integers(data))
console.log(data)

// =============================================================================
const sumNumbers = (arr) => {
    let max = Math.max(...arr)
    console.log(max)
    let min = Math.min(...arr)
    console.log(min)

    let sum = []

    for (let i = min; i <= max; i++) {
        // if (arr.indexOf(i) === -1) { // best approach
        if (!arr.includes(i)) {
            sum.push(i)
        }
    }
    console.log(sum)//[3,5,7]
}

sumNumbers([4, 2, 1, 6, 8, 9])
// ------------------------------------------- common values from all set of array ----------------------------------------------

let input = [['ar', 'er', 'tg'], ['ar', 'tg', 'hn'], ['hy', 'ar', 'tg']]
let commonValue = []
let flatData = input.flat()
let data = [...new Set(flatData)]
console.log(data)
const show = data.reduce((prev, curr) => {
    if (flatData.filter(item => item === curr).length === input.length) {
        prev.push(curr)
    }
    return prev
}, [])
console.log(show)//['ar' , 'tg']

// ------------------------------------ one grater and one lesser ----------------------------------------------------
let data = [1, 4, 5, 2, 6, 7, 8, 3]
//[8,1,7,2,6,3,5,4]

function sortArray(data) {
    const newArray = data.sort();
    let newArr = [];
    let j = 0;
    for (let i = newArray.length - 1; i >= newArray.length / 2; i--, j++) {
        newArr.push(newArray[i], newArray[j]);
    }
    console.log(newArr)

}

sortArray(data)

// ---------------- sequence query --------------------------------------------------------
function result() {
    let arr = []
    for (let i = 1; i <= 50; i++) {
        let data = arr.slice(0, arr.length - 1).reverse()
        let value = arr[arr.length - 1]
        if (data.includes(value)) {
            arr.push(data.indexOf(value) + 1)
        } else {
            arr.push(0)
        }
    }
    return arr
}

console.log(result``)
// output
/* [
    0, 0, 1, 0, 2, 0, 2, 2, 1, 6, 0,
    5, 0, 2, 6, 5, 4, 0, 5, 3, 0, 3,
    2, 9, 0, 4, 9, 3, 6, 14, 0, 6, 3,
    5, 15, 0, 5, 3, 5, 2, 17, 0, 6, 11,
    0, 3, 8, 0, 3, 3
] */
// -----------------------------------------------  closet value to given number ---------------------------------
const closest = (arr, num) => {
    return arr.reduce((prev, curr) => {
        if (Math.abs(curr - num) < Math.abs(prev)) {
            return curr - num
        } else {
            return prev
        }
    }, Infinity) + num
}
console.log(closest([1, 2, 3, 5, 6, 7, 8, 9], 67));//9


// -------------------------------------------------------------------------------
let user = [1, 2, 3, 2, 1, 2, 3, 1]
let say = {}
for (let values of user) {
    if (say[values]) {
        say[values] += 1
    } else {
        say[values] = 1
    }
}

for (let value in say) {
    if (say[value] > 1) {
        console.log(`${value} is repeated ${say[value]}`)
    }
}

console.log(say)
// ===============================================================================================


let input = [1, 2, 3, 4, 5, 6, 7]
let value = 8

function result(input) {
    let newArray = []
    for (let i = 0; i < input.length / 2 - 1; i++) {
        let sum = input[i] + input[input.length - (i + 1)]
        if (sum === value) {
            newArray.push([input[i], input[input.length - (i + 1)]])
        }
    }
    return newArray
}

console.log(result(input))//[[1, 7], [2, 6], [3, 5]]
// -======================================= run 3 for loops at a time ======================


for (var i in [1, 3, 4, 5]) {
    setTimeout(() => {
        console.log('now', i)//6666
    }, 100);
}


for (var i in [1, 3, 4, 5, 6]) {

    (function (i) {
        setTimeout(() => {
            console.log('here', i)//0,1,2,3,4
        }, 100);
    })(i)


}

for (var i in [1, 3, 4, 5, 6, 7, 8]) {
    setTimeout(() => {  
        console.log('now', i)//6,6,6,6,6,6,6
    }, 100);
}

// var is a functional level at global execution
// =====================================================================

