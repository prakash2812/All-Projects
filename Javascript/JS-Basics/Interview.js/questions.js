// ---------------------------------------------------------------------------------------
function add() {
    // var works at function level scope
    //for ran 5 times
    //  setTimeOut executes with i =5
    //
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log('first inside loop ', i);
        }, 0);
    }
    // let works at block scope so j is associate with 5 times of set time out
    for (let j = 0; j < 5; j++) {
        setTimeout(() => {
            console.log('second inside loop ', j);
        }, 0);
    }
}

add();
// -----------------------------------------------------------------------------------------
let name = 'arjun';
const user = (asd) => {};

const promise = new Promise((resolve, reject) => {});
function showName() {
    setTimeout(() => {}, 0);
}

showName();
name = 'prakash';

// ------------------------------------------------------------------------------------------------
let user = ['1', '2', '3', '4'];
user.map(parseInt); // [1,NaN,NaN,NaN]

// parse have two param , string and radix so that ("1",0) return 1
// ('2',1) return NaN // cause due to some rules of octagonal of radix of parse int
// ------------------------------------------------------------------------------------------------
function tryMe() {
    try {
        // console.log('in try');
        throw 'would you se it';
    } catch (error) {
        // console.log('in catch');
        throw 'i hope not';
    } finally {
        return;
    }
}
// due to stack it return the fifo so we get undefined //in finally it return undefined
tryMe();
// ------------------------------------------------------------------------------------------------
Math.max(); // - Infinity
Math.min(); // Infinity

// ------------------------- return a name who is having max salary if not null ----------------------
let user = {
    john: 123,
    max: 23,
    mike: 300,
    david: 299,
};
function highPaidPerson(user) {
    let max = 0;
    let maxName = null;
    for (let [name, salary] of Object.entries(user)) {
        if (salary > max) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
}

highPaidPerson(user);
// --------------------------------------------------
// Anagrams are words that have the same number of same letters, but in different order.

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
    let obj = {};
    // let obj = new Map()
    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        console.log(word, sorted);
        obj[sorted] = word;
        console.log(obj);
        // map.set(sorted, word)
    }
    // return Array.from(map.values())
    return Object.values(obj);
}

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
// ----------------------------------------------------------------------------------------------
a = [10, 12, 15, 21];
for (var i = 0; i < a.length; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}
for (let j = 0; j < a.length; j++) {
    setTimeout(() => {
        console.log(j);
    }, 100);
}
for (var k = 0; k < a.length; k++) {
    setTimeout(
        (function (x) {
            return function () {
                console.log(x);
            };
        })(k),
        100
    );
}

// -------------------------- factorial and fibonacii --------------------------------------------
// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 614 987 1597
// a b c
//   a b

// 1 2 3 4 5 6 7  8  9 10 11
const fact3 = (num) => {
    let result = num < 2 ? num * fact3(num - 1) : num;
    console.log(result);
    /*  let initial = 1;
     let result = initial
     for (let i = 2; i <= num; i++) {
         result = i * result
     }
 
     console.log(result)  */
};

fact3(4);
// fact3(1)
// fact3(99)

const fact1 = (num) => {
    let a = 0;
    let b = 1;
    for (let i = 3; i < num + 1; i++) {
        let c = a + b;
        [a, b] = [b, c];
    }
    console.log(b);
};

fact1(6);
fact1(4);
fact1(52);

const fact = (num) => {
    let arr = [0, 1];
    for (let i = 2; i <= num; i++) {
        let c = arr[i - 1] + arr[i - 2];
        arr.push(c);
    }
    console.log(arr);
};

fact(3); //1
fact(6); //5
fact(9876);

// =========================== use memo =================================
// 1 2 3 4 5 6 7  8  9 10 11

// will take an empty array and store it if it matched the input para again it return the stored value
let prevData = [];
const fact3 = (num) => {
    // return (num < 2) ? num : fact3(num - 2) + fact3(num - 1)
    if (prevData[num]) {
        return prevData[num];
    }
    let initial = 1;
    let result = initial;
    for (let i = 2; i <= num; i++) {
        result = i * result;
    }
    prevData[num] = result;
    console.log('not from memory');
    return result;
};

console.log(fact3(1));
console.log(fact3(10));
console.log(fact3(10));

// -----------------------best approach of fibonacii ------------------------------
let old = [];
const fact = (num) => {
    if (old[num]) {
        return old[num];
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= num; i++) {
        let c = a + b;
        [a, b] = [b, c];
    }
    old[num] = b;
    return b;
};

console.log(fact(6)); // 8
console.log(fact(15)); //610
console.log(fact(15)); // 610 // comes from store memory
// ------------------------- i want group of 3 ------------------------------

let name = 'i am an engineer';
let word = name.split(' ').join('');

function splitWords(num) {
    let newArr = [];
    let initial = 0;
    for (let i = 0; i <= word.length / num; i++) {
        newArr.push([...word].splice(initial, num));
        initial += 3;
    }
    return newArr;
}
console.log(splitWords(3));
for (let key of splitWords(3)) {
    console.log(...key);
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

const rotation = (mat) => {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < i; j++) {
            const tmp = mat[i][j];
            console.log(tmp);
            mat[i][j] = mat[j][i];
            mat[j][i] = tmp;
        }
    }
    return mat;
};
let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let newArray = rotation(array);
console.log(newArray);
let result = newArray.map((item) => item.reverse());
console.log(result);
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
};

// =================================================================================================

let data = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
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

console.log(integers(data));
console.log(data);

// =============================================================================
const sumNumbers = (arr) => {
    let max = Math.max(...arr);
    console.log(max);
    let min = Math.min(...arr);
    console.log(min);

    let sum = [];

    for (let i = min; i <= max; i++) {
        // if (arr.indexOf(i) === -1) { // best approach
        if (!arr.includes(i)) {
            sum.push(i);
        }
    }
    console.log(sum); //[3,5,7]
};

sumNumbers([4, 2, 1, 6, 8, 9]);
// ------------------------------------------- common values from all set of array ----------------------------------------------

let input = [
    ['ar', 'er', 'tg'],
    ['ar', 'tg', 'hn'],
    ['hy', 'ar', 'tg'],
];
let commonValue = [];
let flatData = input.flat();
let data = [...new Set(flatData)];
console.log(data);
const show = data.reduce((prev, curr) => {
    if (flatData.filter((item) => item === curr).length === input.length) {
        prev.push(curr);
    }
    return prev;
}, []);
console.log(show); //['ar' , 'tg']

// ------------------------------------ one grater and one lesser ----------------------------------------------------
let data = [1, 4, 5, 2, 6, 7, 8, 3];
//[8,1,7,2,6,3,5,4]

function sortArray(data) {
    const newArray = data.sort();
    let newArr = [];
    let j = 0;
    for (let i = newArray.length - 1; i >= newArray.length / 2; i--, j++) {
        newArr.push(newArray[i], newArray[j]);
    }
    console.log(newArr);
}

sortArray(data);

// ---------------- sequence query --------------------------------------------------------
function result() {
    let arr = [];
    for (let i = 1; i <= 50; i++) {
        let data = arr.slice(0, arr.length - 1).reverse();
        let value = arr[arr.length - 1];
        if (data.includes(value)) {
            arr.push(data.indexOf(value) + 1);
        } else {
            arr.push(0);
        }
    }
    return arr;
}

console.log(result``);
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
    return (
        arr.reduce((prev, curr) => {
            if (Math.abs(curr - num) < Math.abs(prev)) {
                return curr - num;
            } else {
                return prev;
            }
        }, Infinity) + num
    );
};
console.log(closest([1, 2, 3, 5, 6, 7, 8, 9], 67)); //9

// ---------------------------------------------unique values/find count----------------------------------
let user = [1, 2, 3, 2, 1, 2, 3, 1];
const getUnique = () => {
    let say = {};
    for (let values of user) {
        if (say[values]) {
            say[values] += 1;
        } else {
            say[values] = 1;
        }
    }

    for (let value in say) {
        if (say[value] > 1) {
            console.log(`${value} is repeated ${say[value]}`);
        }
    }
};

// only unique values
const unique = user.filter(
    (value) => user.indexOf(value) === user.lastIndexOf(value)
);

// remove duplicates --
const unique4 = user.filter((value, index) => user.indexOf(value) === index);

const unique1 = () => {
    let data = [];
    user.forEach((item, index) => {
        if (user.indexOf(item) === index) {
            data.push(item);
        } else {
            let element = data.indexOf(item);
            if (element !== -1) {
                data.splice(element, 1);
            }
        }
    });
    return data;
};

const unique2 = () => {
    let data1 = new Set();
    let data2 = new Set();
    for (let value of user) {
        if (data1.has(value)) {
            data2.add(value);
            data1.delete(value);
        } else if (!data2.has(value)) {
            data1.add(value);
        }
    }
    return [...data1];
};
console.log(say);
// ===============================================================================================

let input = [1, 2, 3, 4, 5, 6, 7];
let value = 8;

function result(input) {
    let newArray = [];
    for (let i = 0; i < input.length / 2 - 1; i++) {
        let sum = input[i] + input[input.length - (i + 1)];
        if (sum === value) {
            newArray.push([input[i], input[input.length - (i + 1)]]);
        }
    }
    return newArray;
}

console.log(result(input)); //[[1, 7], [2, 6], [3, 5]]
// -======================================= run 3 for loops at a time ======================

for (var i in [1, 3, 4, 5]) {
    setTimeout(() => {
        console.log('now', i); //3333
    }, 100);
}

for (var i in [1, 3, 4, 5, 6]) {
    (function (i) {
        setTimeout(() => {
            console.log('here', i); //0,1,2,3,4
        }, 100);
    })(i);
}

for (var i in [1, 3, 4, 5, 6, 7, 8]) {
    setTimeout(() => {
        console.log('now', i); //6,6,6,6,6,6,6
    }, 100);
}

// -------------------------------------------------------------
const fn = () => {
    console.log('now', i);
};
for (let i in [1, 3, 4, 5]) {
    // setTimeout(fn, 100);
    /* setTimeout(() => {
        console.log('now', i);
    }, 100); */
    /* (function (i) {
        setTimeout(fn, 100);
    })(i); */
    (function (i) {
        setTimeout(() => {
            console.log('now', i);
        }, 100);
    })(i);
    /* (function (i) {
        setTimeout((i) => {
            console.log('now', i);
        }, 100);
    })(i); */
}

// var is a functional level at global execution
// ======================================common values===============================
let data = [
    [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100,
    ],
    [
        101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
        115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128,
        129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
        143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156,
        157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
        171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
        185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 98, 99,
        100,
    ],
    [
        201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214,
        215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228,
        229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242,
        243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256,
        257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270,
        271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284,
        285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 98, 99,
        100,
    ],
];
// output--------------->   [98,99,100]

// Best approach..........................
function best() {
    data.shift().filter((val) => {
        return data.slice(1).every((v) => v.indexOf(val) !== -1);
    });
}
function commonValues1() {
    let commonData = [];
    for (let value of data[0]) {
        let same = true;
        for (let item = 1; item < data.length; item++) {
            let isExist = data[item].find((val) => val === value);
            if (!isExist) {
                same = false;
                break;
            }
        }
        if (same) {
            commonData.push(value);
        }
    }
    return commonData;
}

function commonValues() {
    let list = [];
    data.flat().reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1;
            if (+acc[curr] === data.length) {
                list.push(curr);
            }
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});
    return list;
    /* let list = [];
    let acc = {};
    for (let curr of data.flat()) {
        if (acc[curr]) {
            acc[curr] += 1;
            if (+acc[curr] === data.length) {
                list.push(curr);
            }
        } else {
            acc[curr] = 1;
        }
    }
    return list; */
}

console.time('start');
console.log(commonValues1());
console.timeEnd('start');

/* console.time('start');
console.log(commonValues());
console.timeEnd('start'); */
// ===================================compare twio objects return modified only========================================
const oldState = {
    id: '0F8JIqi4zwvb77FGz6Wt',
    phone: '0700-3090279',
    lastName: 'Fiedler',
    firstName: 'Heinz Georg',
    location: [
        {
            state: 'Rheinland Pfalz',
            street: '4118, Schulstraße',
            city: 'Fellbach',
            timezone: '-7:00',
            country: 'Germany',
        },
        {
            street: '6786, Pecan Acres Ln',
            timezone: '+4:30',
            city: 'Perth',
            state: 'New South Wales',
            country: 'Australia',
        },
        {
            city: 'Porza',
            street: '9730, Rue Barrème',
            timezone: '-7:00',
            country: 'Switzerland',
            state: 'Ticino',
        },
    ],
    email: 'heinz-georg.fiedler@example.com',
    gender: 'male',
    title: 'mr',
    registerDate: '2020-03-07T00:42:32.221Z',
    picture: 'https://randomuser.me/api/portraits/men/81.jpg',
    dateOfBirth: '1974-03-12T21:15:08.878Z',
};

const newState = {
    id: '0F8JIqi4zwvb77FGz6Wt',
    phone: '0700-3090279',
    lastName: 'Fiedler',
    firstName: 'Heinz-Georg',
    location: [
        {
            state: 'Rheinland-Pfalz',
            street: '4118, Schulstraße',
            city: 'Fellbach',
            timezone: '-7:00',
            country: 'Germany',
        },
        {
            street: '6786, Pecan Acres Ln',
            timezone: '+4:30',
            city: 'Perth',
            state: 'South Wales',
            country: 'AUS',
        },
    ],
    email: 'heinz-georg.fiedler@gamil.com',
    gender: 'male',
    title: 'mr',
    registerDate: '2020-03-07T00:42:32.221Z',
    picture: 'https://randomuser.me/api/portraits/men/81.jpg',
    dateOfBirth: '1974-03-12T21:15:08.878Z',
};

let modifiedObj = {};
const compareFunc = (oldState = {}, newState = {}) => {
    const isArray = (arr) => Array.isArray(arr);
    const isObject = (obj) => typeof obj === 'object' && obj != null;

    if (isArray(oldState)) {
        let newArr = [];
        for (let i = 0; i < oldState.length; i++) {
            if (isArray(oldState[i]) || isObject(oldState[i])) {
                newArr.push(compareFunc(oldState[i], newState[i]));
            } else {
                if (oldState[key] !== newState[key]) {
                    modifiedObj[key] = newState[key];
                }
            }
        }
        return newArr;
    } else if (isObject(oldState) && isObject(newState)) {
        const newObj = {};
        for (let key of Object.keys(oldState)) {
            let value = oldState[key];
            if (isArray(value) || isObject(value)) {
                newObj[key] = compareFunc(value, newState[value]);
            } else {
                if (oldState[key] !== newState[key]) {
                    newObj[key] = newState[key];
                }
            }
        }
        return newObj;
    } else {
        if (oldState[key] !== newState[key]) {
            modifiedObj[key] = newState[key];
        }
    }
};

console.log(
    JSON.stringify(
        // Pass your result object here
        compareFunc(oldState, newState)
    )
);
// ====================================================================================
// return modified properties only comparing old and new objects
let user = [1, 2, 3, 4, 5];

function fact(num) {
    return num === 0 || num === 1 ? 1 : num * fact(num - 1);
}
const fact1 = (num) => {
    const bigInt = BigInt(num);
    let result = 1n;
    for (let i = 1n; i <= bigInt; i++) {
        result *= bigInt;
    }
    return String(result);
};
// fact(90000);
console.log(fact1(90000));
