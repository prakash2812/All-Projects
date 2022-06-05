// input = [1, 3, 5, 7, 8, 3, 2, 5]
//Function to find the maximum contiguous subarray

function subarray(arr) {
    let max = 0;
    let start = 0;
    let end = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) {
            max = sum;
            start = i;
            end = i;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return arr.slice(start, end + 1);
}

console.log(subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
