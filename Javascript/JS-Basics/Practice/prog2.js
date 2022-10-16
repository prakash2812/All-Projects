// ----------------------sum of numbers from n1 to n2 --------------------------
const sumNumbers = (num1, num2) => {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumNumbers(9, 1));

// ---------------------------------- prime numbers  ------------------------

const primeNo = (num) => {
    for (let i = 0; i <= num; i++) {
        if (i === 0 || i === 1) {
            continue;
        }
        let primeflag = true;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j === 0) {
                primeflag = false;
                break;
            }
        }
        if (primeflag) {
            console.log(i);
        }
    }
};

primeNo(20);

// -------------------------------------------------------------------------------------------
// longest polindrome substring
// input str= "abcba1234321"

function longPolindrome(str) {
    let longest = 0;
    let start = 0;
    let end = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let subStr = str.slice(i, j);
            if (subStr.length > longest && isPalindrome(subStr)) {
                longest = subStr.length;
                start = i;
                end = j;
            }
        }
    }
    return str.slice(start, end);
}

console.log(longPolindrome('abcba1234321'));
// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {};

// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

function result(s) {
    let max = 0;
    let start = 0;
    let end = 0;
    let map = {};
    while (end < s.length) {
        console.log('first', end);
        if (map[s[end]] === undefined) {
            map[s[end]] = end;
            end++;
            console.log('first if', end);

            max = Math.max(max, end - start);
        } else {
            console.log('else');
            start = map[s[end]];
            map[s[end]] = end;
            console.log(map);
            console.log('first else', end);

            end++;
        }
    }
    console.log(map);
    return max;
}

console.log('bbbbb', result('bbbbb'));
