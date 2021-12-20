// Closures is a combination of functions bundled together with references to its surrounding state(lexical environment)
// a combination of functions and its scope (lexical scope) is called closure

// When a fun returning an another fun it return an combination of function declaration along with the function scope chain

//  an inner function has always access the variable and methods of its outer function even after the outer function has returned

function shapes(d) {
    var area = Math.pow(d / 2, 2) * 3.1415;
    return function (h) {
        return area * h
    }
}

var cylinder = shapes(2)
cylinder(10)

// ----------------------------------------------------------------------------------------let multiply = function (x) {
let multiply = function (x) {
    return function (y) {
        return x * y
    }
}

let showMultiply = multiply(3)
console.log(showMultiply(2)) // 6
console.log(multiply(2)(3)) // 6


// ----------------------------------------- memo ---------------------------------------
function memo(...args) {
    let result = {}
    return function add() {
        let key = args.toString()
        if (key in result) {
            console.log('memory')
            return result[key]
        }
        result[key] = args[0] + args[1]
        return result[key]
    }
}

let fast = memo(2, 3)
console.log(fast``)
console.log(fast())