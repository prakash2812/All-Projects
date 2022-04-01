function sumofIndexes(index) {
    let sum = 0;
    let user = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let key of user.splice(0, index)) {
        sum += key;
    }
    return console.log(sum);
}
2;
// --------------------------------------------------
let arr = [1, 2, 3];

console.log(shuffle(arr));
// arr = [3, 2, 1]
function shuffle(arr) {
    console.log(Math.random);
    return arr.sort(() => Math.random() - 0.5);
}
// -----------------------------------------------------------

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let arr = [pete, john, mary];

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
    let names = [];
    for (let key of arr) names.push(key.name);
    return names;
}
console.log(sortByAge(arr));

// --------------------------------------------------------------------
let john = { name: 'John', surname: 'Smith', id: 1 };
let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary = { name: 'Mary', surname: 'Key', id: 3 };

let users = [john, pete, mary];

let usersMapped = newObj(users);

function newObj(users) {
    return users.map((item) => {
        return {
            fullname: item.name + item.surname,
            id: item.id,
        };
    });
}

console.log(usersMapped);
// ------------------------- remove duplicates ------------------------------------
function unique(arr) {
    return arr.filter((item, index) => !arr.includes(item, index + 1));
}

let strings = [
    'Hare',
    'Krishna',
    'Hare',
    'Krishna',
    'Krishna',
    'Krishna',
    'Hare',
    'Hare',
    ':-O',
];
console.log(unique(strings)); //["Hare","krishna",":-0"]
// --------------------------------------------------------------------
let data = [
    'Hare',
    'Krishna',
    'Hare',
    'Krishna',
    'Krishna',
    'Krishna',
    'Hare',
    'Hare',
    ':-O',
];
// only unique values
const unique = data.filter(
    (value) => data.indexOf(value) === data.lastIndexOf(value)
);

// remove duplicates --
const unique4 = data.filter((value, index) => data.indexOf(value) === index);

const removeDummy = data.reduce((prev, curr) => {
    if (prev.indexOf(curr) === -1) {
        prev.push(curr);
    }
    return prev;
}, []);
console.log(removeDummy); //[ 'Hare', 'Krishna', ':-O' ]

// -------------------------------------------------------------------------------
let people = [
    { name: 'A', age: 21 },
    { name: 'b', age: 20 },
    { name: 'c', age: 20 },
    { name: 'd', age: 25 },
];

/* {
    '20': [{ name: 'b', age: 20 }, { name: 'c', age: 20 }],
        '21': [{ name: 'A', age: 21 }],
            '25': [{ name: 'd', age: 25 }]
} */

const idToValues = people.reduce((prev, acc) => {
    prev[acc.age] = people.filter((item) => item.age == acc.age);
    return prev;
}, {});

// this is better approach
const idToValues1 = people.reduce((acc, curr) => {
    let value = acc[curr.age];
    if (value) {
        // value = [...value, curr];
        value.push(curr);
    } else {
        value = [curr];
    }
    return acc;
}, {});
console.log(idToValues); //result
/* {
    '20': [{ name: 'b', age: 20 }, { name: 'c', age: 20 }],
        '21': [{ name: 'A', age: 21 }],
            '25': [{ name: 'd', age: 25 }]
} */
// ------------------------ sort by age --------------------------------------------
let people = [
    { name: 'prakash', age: 21 },
    { name: 'arjun', age: 20 },
    { name: 'arjun1', age: 20 },
    { name: 'arya', age: 25 },
];

let user = people
    .slice()
    .sort((a, b) => a.age - b.age)
    .map((item) => item.name);
console.log(user); // [arjun,arjun1,prakash,arya]
console.log(people);
// -----------------------------------------------------------------------------------------------
let user = [
    { label: 'Html', color: 'dark' },
    { label: 'css', color: 'red' },
    { label: 'js', color: 'blue' },
];

function keyToValue(user) {
    return user.reduce((item, curr) => {
        item[curr.label] = curr.color;
        return item;
    }, {});
}

function modified(user) {
    let obj = {};
    for (let { label, color } of user) {
        obj[label] = color;
    }
    return obj;
}

function mapsObj(user) {
    let map = new Map();
    return user.reduce((map, item) => {
        map.set(item.label, item.color);
        return map;
    }, map);
}
console.log(keyToValue(user)); // {html:dark,css:red,js:blue}
console.log(modified(user)); //{html:dark,css:red,js:blue}
console.log(mapsObj(user)); //{html:dark,css:red,js:blue}
// -------------------------------------- verify key exists in object or not -----------------------------------------

let obj = {
    name: 'arjun',
    age: 23,
};
function validKey(obj, key) {
    return Object.keys(obj).some((item) => item === key);
    return obj.hasOwnProperty(key);
}
console.log(validKey(obj, 'salary'));

// ------------------------------------------remove dup ---------------------------------------
let user = [1, 2, 3, 3, 2]; //
let update = [];

function removeDup(update, user) {
    for (let i = 0; i < user.length; i++) {
        for (let j = i + 1; j < user.length; j++) {
            if (!(user[i] === user[j]) && update.indexOf(user[i]) === -1) {
                update.push(user[i]);
            }
        }
    }
    console.log(update);
}

removeDup(update, user); // [1,2,3]

// ------------------------------- sort(ascending to descending) given object dynamically by giving input -----------------------------------------------

let data = [
    { name: 'arzun', age: 12, salary: 1211, role: 'developer' },
    { name: 'aryan', age: 2, salary: 121, role: 'manager' },
    { name: 'arruxe', age: 4, salary: 122, role: 'CEO' },
    { name: 'arnav', age: 25, salary: 12, role: 'Owner' },
];

function filterData(keyProp) {
    typeof data[0][keyProp] !== 'string'
        ? data.sort((a, b) => a[keyProp] - b[keyProp])
        : data.sort((a, b) => a[keyProp].localeCompare(b[keyProp]));
    return data;
}

console.log('sort with age', filterData('age'));
console.log('sort with name', filterData('name'));
console.log('sort with role', filterData('role'));

// ------------------------------------- compare two objects with property key and return true or false--------------------------------------

let parentObj = null;
let childObj = null;

let user = {
    name: 'arjun',
    age: 28,
    role: 'developer',
    title: 'something',
    age: 12,
    designation: 'Manager',
    demo: 12,
};

let user1 = {
    name: 'arjun',
    title: 'something',
    age: 12,
    designation: 'Manager',
};

// here i'm doing i'm not sure which object have more properties to compare with les properties
if (Object.keys(user1).length < Object.keys(user).length) {
    parentObj = Object.keys(user);
    childObj = user1;
} else {
    parentObj = Object.keys(user1);
    childObj = user;
}

const verifyKeyExistence = () =>
    parentObj.reduce((prev, curr) => {
        prev[curr] = Object.keys(childObj).some((item) => item === curr);
        // prev[curr] = user1.hasOwnProperty(curr)
        return prev;
    }, {});

console.log(verifyKeyExistence()); //{ name: true, age: true, role: false, title: true, designation: true, demo: false }

// ---------------------------------------------------------------------------------------
// ------------------------------- skip one and then 2 so on -----------------------------
let user = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let shuffle = [];
let num = 0;

for (let i = 0; i < user.length; i++) {
    console.log(i);
    shuffle.push(user[i]);
    i = ++num + i;
    console.log(i);
}
console.log(shuffle);
// ---------------------------------------------------------------------------------------------
let user = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let shuffle = [];
let num = 0;
let shuffleUser = (user) => {
    if (user.length == 0) {
        return console.log(shuffle);
    }
    shuffle.push(user[num]);
    num += 1;
    user = user.splice(num, user.length);
    shuffleUser(user);
};

shuffleUser(user); //[1,3,6,10]

// ------------------------------------------------ unique array (not remove duplicates)----------------------------
let user = [1, 2, 3, 1, 2, 4, 5, 6, 4];
let uniqueArray = () =>
    user.reduce((prev, curr) => {
        if (user.filter((value) => value === curr).length == 1) prev.push(curr);
        return prev;
    }, []);

console.log(uniqueArray(user)); // [3,5,6]
// --------------------------------------------------------------------------------------------------------

// ---------------------- unique and couples data ---------------
let user = [1, 2, 3, 3, 4, 5, 2, 1];

let uniqueArray = () =>
    user.reduce((prev, curr) => {
        if (user.filter((value) => value === curr).length !== 1)
            prev.push(curr);
        return prev;
    }, []);

const removeValues = (...input) => {
    user.filter((item) => input.includes(item)).map((item) =>
        user.splice(user.indexOf(item), 1)
    );
    return user;
};

let arr = uniqueArray(); //[ 1, 2, 3, 3, 2, 1 ]
console.log('array', arr);
console.log(removeValues(...arr)); //[4,5]
// ------------------------------------- best approach - of unique array -----------
let arr = [1, 2, 1, 2, 3, 2, 2, 2, 3, 7, 8, 4, 2, 2, 3, 5, 6];

let newArr = [...new Set(arr)]; // due to this no of iteration are reduced
let uniqueArray = () =>
    newArr.reduce((acc, item) => {
        if (arr.filter((data) => item === data).length === 1) acc.push(item);
        return acc;
    }, []);

console.log(uniqueArray()); //[ 7, 8, 4, 5, 6 ]
// ------------------------------ how many time data was repeated -------------------------------------------

let user1 = [1, 2, 3, 3, 4, 5, 2, 1];

const repetitiveCount = () =>
    user1.reduce((prev, curr) => {
        prev[curr] = user1.filter((item) => item == curr).length;
        return prev;
    }, {});

console.log(repetitiveCount()); //{ '1': 2, '2': 2, '3': 2, '4': 1, '5': 1 }
// -------------------------------best approach - duplicates and repeated ones -----------------------------

let user = [1, 2, 3, 1, 2, 4, 5, 6, 4, 2];

const removeDuplicateArray = user.filter(
    (item, index) => user.indexOf(item) == index
);
const repeatedValue = user.filter(
    (item, index) => user.indexOf(item) !== index
);

const removeValues = (...input) => {
    return user.filter((item) => !input.includes(item));
};

console.log(removeDuplicateArray); //[ 1, 2, 3, 4, 5, 6 ]
console.log(repeatedValue); //[ 1, 2, 4, 2 ]
console.log(removeValues(1, 2)); //[ 3, 4, 5, 6, 4 ]
// -------------------------------------------- find max and min of two elements ---------------------------------------------------------
// -- find the min difference between elements --first element is less than second element --
const maxDiff = () => {
    let user = [4, 2, 13, 6, 8, 19, 10, 1];
    let max = 0;
    for (let i = 0; i < user.length; i++) {
        for (let j = i + 1; j < user.length; j++) {
            if (user[i] < user[j]) {
                max = Math.max(max, user[j] - user[i]);
                // max = Math.min(max, user[j] - user[i])
            }
        }
    }
    return max;
};

console.log(maxDiff());
// ---------------------------------------- best way to find max difference between elements --------------------------------------------------------------------

// -- find the max difference between elements --first element is less than second element --
const maxDiff = () => {
    let user = [4, 2, 13, 6, 8, 19, 10, 1];
    // let user = [7, 9, 5, 6, 13, 2]
    let max = user[1] - user[0];
    let min = user[0];
    for (let i = 1; i < user.length; i++) {
        if (user[i] - min > max) {
            max = user[i] - min;
        }
        if (user[i] < min) {
            min = user[i];
        }
    }
    return max;
};

console.log(maxDiff());
// ============================================================================
var letterCombinations = function (digits) {
    let obj = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    let length = digits.split('').length;
    let data = digits.split('').map((item) => obj[item]);

    let str = '';
    switch (data.length) {
        case 1:
            for (let i = 0; i < data[0].length; i++) {
                str = str.concat(data[0][i]);
            }
            return [...str.split('').join('')];
            break;
        case 2:
            for (let i = 0; i < data[0].length; i++) {
                for (let j = 0; j < data[1].length; j++) {
                    str = str.concat(data[0][i] + data[1][j]);
                }
            }
            return [...str.split('').join('')];
            break;

        default:
            return [];
    }
};

letterCombinations('2'); //["a", "b", "c"]

// ===================================================================================

let storage = {
    id: 3,
    device: 'Moto G',
    os: 'Android 4.3',
    manufacturer: 'Motorola',
    lastCheckedOutData: '',
    lastCheckedOutBy: 'arjun',
    isCheckedOut: false,
};

// ----------------------------------------------------------------------------------
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let newArr = [];
    for (let value of A) {
        let data = [...new Set(value.split(''))].join('');

        if (data.length > 1) {
            if (newArr.length > 0) {
                let newSet = new Set(new String(newArr).split(',').join(''));
                console.log(newSet);
                let newData = data.split('');
                for (let i = 0; i < newData.length; i++) {
                    if (newSet.has(newData[i])) {
                        break;
                    } else if (data.length - 1 <= i) {
                        newArr.push(data);
                    }
                }
            } else {
                newArr.push(data);
            }
        }
    }
    return newArr.length > 1
        ? new String(newArr).split(',').join('').length
        : 0;
}
// ================================================================================================
// let N = 2
let N = 14; // 1+4 = 5 SO TWICE OF EACH ITEM AND LEAST VALUE 1+9 = 10
console.log(solution1(N));
function solution1(N) {
    let number = 0;
    for (let value of N.toString().split('')) {
        number += +value;
    }
    let target = number * 2;
    let flag = true;
    while (flag) {
        let latest = 0;
        N++;
        for (let value of N.toString().split('')) {
            latest += +value;
        }
        if (latest === target) {
            flag = false;
        }
    }
    return N;
}

solution(14); // 19
solution(99); // 9999 // 9 + 9 = 18 // 9+9+9+9 = 36
solution(100); //101 // 1 + 0 + 0 = 1 // 1+0+1 = 101

// ---------------------------------------------------------------------------------
let arr = [1, 3, 5, 7, 8, 9];
let binarySearch = (arr, x, strt, end) => {
    if (end < strt) return false;
    let mid = Math.floor((strt + end) / 2);
    if (arr[mid] === x) {
        return true;
    }
    if (arr[mid] < x) {
        return binarySearch(arr, x, mid + 1, end);
    }
    if (arr[mid] > x) {
        return binarySearch(arr, x, strt, mid - 1);
    }
};

let strt = 0,
    end = arr.length - 1;
let bool = binarySearch(arr, 7, strt, end);
// console.log(bool);

/* calc(4).sum(2).multi(3).value() = 18
calc(4).sum(2).value() = 6
calc(4).multi(2).value() = 8
calc(4).value() = 4  */

// let A = ['co', 'dil', 'ity'] // 5 // 'codil','coity','dilco','ityco'
// let A = ['evd', 'yyy', 'aaa', 'jan'] // 6
let A = ['eva', 'jkw', 'zld', 'jan']; //9
// console.log(solution(A))

function* common(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

function* data() {
    yield* common(48, 57);
    yield* common(65, 90);
    yield* common(97, 122);
}

let str = '';
for (let value of data()) {
    console.log(value);
    str += String.fromCharCode(value);
}
console.log(str);

console.log('one', data().next());
console.log('one', data().next());
console.log('one', data().next());

function* result(seed) {
    let value = seed;

    while (true) {
        value = (value * 16807) % 2147483647;
        yield value;
    }
}

let show = result(2);
console.log('two', show.next().value);
console.log('two', show.next().value);
console.log('two', show.next().value);
console.log('two', show.next().value);
console.log('two', show.next().value);
console.log('two', show.next().value);
console.log('two', show.next().value);

// var str = "Egad, a base life defiles a bad age.";
// ---------------------------------------------------------------------------
const data = ['eat', 'tab', 'cat', 'tea', 'tan', 'ate', 'nat', 'bat'];

function anagram(...data) {
    let newArr = [];

    data.reduce((prev, curr) => {
        if (!prev.includes) {
            data;
        }
    }, []);
    let name1, name2;
    if (str1.length === str2.length) {
        name1 = str1.split('').sort().join('');
        name2 = str2.split('').sort().join('');
    }

    return name1 === name2;
}

['tea', 'ate', 'eat'], ['bat', 'tab'], ['cat'], ['nat', 'tan'];
console.log(anagram('cat', 'cat'));
