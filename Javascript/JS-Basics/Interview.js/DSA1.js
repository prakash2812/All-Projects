// have duplicate users i need all unique users and in that products should be update the quantity accordingly.
let data = [
    {
        id: 1,
        userId: 1,
        date: '2020-03-02T00:00:00.000Z',
        products: [
            { productId: 1, quantity: 4 },
            { productId: 2, quantity: 1 },
            { productId: 3, quantity: 6 },
        ],
        __v: 0,
    },
    {
        id: 2,
        userId: 1,
        date: '2020-01-02T00:00:00.000Z',
        products: [
            { productId: 2, quantity: 4 },
            { productId: 1, quantity: 10 },
            { productId: 5, quantity: 2 },
        ],
        __v: 0,
    },
    {
        id: 3,
        userId: 2,
        date: '2020-03-01T00:00:00.000Z',
        products: [
            { productId: 1, quantity: 2 },
            { productId: 9, quantity: 1 },
        ],
        __v: 0,
    },
];

const result = data.reduce((acc, curr, index) => {
    if (!acc[curr.userId]) {
        acc[curr.userId] = curr;
    } else {
        curr.products.forEach((product) => {
            const matchFound = acc[curr.userId].products.find(
                (element) => element.productId === product.productId
            );
            if (matchFound) {
                matchFound.quantity += product.quantity;
            } else {
                acc[curr.userId].products.push(product);
            }
        });
    }

    return acc;
}, {});

console.log(Object.values(result));

/* let uniqueUsers = {};

// Iterate through the data array
data.forEach((order) => {
    const userId = order.userId;

    // If user is not already in the uniqueUsers object, add them
    if (!uniqueUsers[userId]) {
        uniqueUsers[userId] = { ...order };
    } else {
        // If user is already in the uniqueUsers object, update product quantities
        order.products.forEach((product) => {
            const existingProduct = uniqueUsers[userId].products.find(
                (p) => p.productId === product.productId
            );

            if (existingProduct) {
                existingProduct.quantity += product.quantity;
            } else {
                uniqueUsers[userId].products.push({ ...product });
            }
        });
    }
}); */

// Convert the uniqueUsers object back to an array
// const consolidatedData = Object.values(uniqueUsers);

// console.log(consolidatedData);

/* longest polindrome substring */

function longestPolyindromeSubString() {
    let s = 'bab';

    let longest = '';
    function isPoly(s, left, right) {
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            left--;
            right++;
        }
        console.log('right', left, right);
        let result = s.slice(left + 1, right);
        console.log(result);
    }

    for (let index = 0; index < s.length; index++) {
        let odd = isPoly(s, index, index);
        let even = isPoly(s, index, index + 1);

        let long = odd.length > even.length ? odd : even;
        if (long.length > longest.length) {
            longest = long;
        }
    }
}

/* longest nonrepating substring */

function longestNonRepeatingSubString() {
    let s = 'cfgcklmfg';

    let longest = '';
    let total = [];
    let set = new Set();
    let left = 0;
    for (let index = 0; index < s.length; index++) {
        if (set.has(s[index])) {
            let substring = [...set].join('');
            if (substring.length > longest.length) {
                longest = substring;
                // total.push(longest);
            } else if (substring.length === longest.length) {
                total.push(substring, longest);
            }
            set.delete(s[left]);
            set.add(s[index]);
            left++;
        } else {
            set.add(s[index]);
        }
    }
    total.push([...set].join(''));
    console.log(total);
    return total;
}
longestNonRepeatingSubString(); // [ 'gcklmf', 'fgcklm', 'cklmfg' ]

let user = [1, 2, 3, 4, 2, 4, 5, 6];
function duplicates() {
    user.map((item, index) => {
        if (index !== user.lastIndexOf(item)) {
            return item;
        }
    });
}

duplicates();
let dup = [23, 4, 56, 43, 12, 11]; // [2,4]
output[4, 56, 12, 23, 43, 11]

odd numbers should come after even

let left = 0
right = 1
        while(dup.length-1)
