// Currying is a process in functional programming in which we transform a function with multiple arguments in to a sequence of nested functions that take one argument at a time 
// Currying doesn't call a function its simply transform it

//  currying can be done using bind and closures
//  currying mostly for function only 

// ------------------ using bind --------------------------------

let name = function (x, y) {
    return x + y
}

// bind doesn't invoke function it just copied of that function with reference
// bind the function with reference and copy the function/method
/* let name = function (y) {
    let x = 2
    return x + y
} */
let showName = name.bind(this, 2)
console.log(showName) // Function  bound name
console.log(showName())// 5 // invoke function with other param 
// ---------------- using closures ----------------------------------------------------------------
let multiply = function (x) {
    return function (y) {
        return x * y
    }
}

let showMultiply = multiply(3)
console.log(showMultiply) // function
// show multiply is a ref to function 
// Hence we can invoke function again of show multiply

console.log(showMultiply(2)) // 6
console.log(multiply(2)(3)) // 6
