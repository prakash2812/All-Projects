// FUnction declaration and Variable declaration are only place to top of scope
// i.e., where ever u declare in a js file its implicitly keeps in top of scope

// function expression and variable initialization couldn't be hoisting
// Hosting means Functions and variable declarations are put into memory during compile phase 
// Moving variable declarations to top od their scope 

// const and let declarations are hoisted but never initialized even with undefined. only initialize with run time

// All const declarations must be initialized once initialized you can't reassign a new value
let name = 'arjun'

getName();
// function declaration will be hoisted at top before the code execution starts hence getName() gets output "arjun"
function getName() {
    console.log(name);
}
// ------------------------------------------------------------------
newFunc() // can't access newFunc() before initialization
const newFunc = function () {
    console.log(name);
}
// ---------------------------------------------------------------------
newFun()// can't access newFun() before initialization
const newFun = () => console.log(name);
// -----------------------------------------------------------------

function hoist() {
    console.log(name)
    let name = 'arjun'
}

hoist()// reference error: cannot access name before initialization
