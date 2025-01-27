// isPolindrome(121) true
// isPolindrome(-121) false
// isPolindrome(10) false

// two pointers concept o(n) for iteration
const isPalindrome = (value) => {
    if (value < 0) return false;
    value = value.toString();
    console.log('value', value, value.length, value[0]);
    let left = 0;
    let right = value.length - 1;

    while (left < right) {
        if (value[left] !== value[right]) return false;
        left++;
        right--;
    }
    console.log('true');
    return true;
};

isPalindrome(121); //true
isPalindrome(-121); //false
isPalindrome(10); //false
isPalindrome(11); //true

// /* return the minimum positive value of start value such that step by step sum is never less than 1 */
// https://www.youtube.com/watch?v=acIkZpmbiaA
const minStartValue = (num) => {
    let sum = 0;
    let min = 1;

    for (value of num) {
        sum += value;
        min = Math.min(sum, min);
    }
    if (min > 0) return 1;
    return -1 * min + 1;
};

console.log('minStartValue', minStartValue([-3, 2, -3, 4, 2]));
console.log('minStartValue', minStartValue([1, 2]));

/* two sums refer: https://www.youtube.com/watch?v=jTQYyMYcTxo */
// given array already sorted
const twoSum = (num, target) => {
    let left = 0;
    let right = num.length - 1;
    while (left < right) {
        if (num[left] + num[right] === target) {
            return [left + 1, right + 1];
        } else if (num[left] + num[right] >= target) {
            right--;
        } else {
            left++;
        }
    }
};
console.log('twoSum'), twoSum([3, 2, 4]);

var twoSum_latest = function (nums, target) {
    // Create a map to store the complement of each number and its index
    let complementMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let complement = target - currentNum;

        // Check if the complement is in the map
        if (complementMap.has(complement)) {
            // Return the indices of the two numbers
            return [complementMap.get(complement), i];
        }

        // Store the current number and its index in the map
        complementMap.set(currentNum, i);
    }

    // No solution found
    return undefined;
};

// Examples
console.log(twoSum_latest([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum_latest([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum_latest([3, 3], 6)); // Output: [0, 1]
/* Rotate K number */
    
const rotateArray = (num, k) => {
    if (k < num.length) {
        k=k%num.length
    }
    if (k < 0) {
        k+=num.length
    }
    MIDIInputMap.slice(num.length-k).concat(num.slice())

}

let num = [1, 2, 3, 4, 5]
rotateArray(num,2)