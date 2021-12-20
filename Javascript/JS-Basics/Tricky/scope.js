// 1) "var" is function-scoped, whereas "let and const" is block - scoped.
// 2) Using "var" attaches the variable to the global and then window,  eg:window.name
// whereas "let" prevents it.
// 3) if we don't declare (let/const/var) it points to global. Use strict to prevent that
// --------------------------- Global Scope ------------------------

let name = 'arjun' // global scope
// it memory allocation will be garbage after entire program exist
// if we reassign to new value it update though out the program

function increment() {
    name = 'prakash'
    console.log(name);//prakash
}

function add() {
    console.log(name); //prakash
}
add() // arjun
increment();
add()//prakash
console.log(name);//prakash

// ----------------------------------------- local Scope --------------------------------
// function scope can access inside and outside scope of variable declarations
// function with out param - works as local scope
const num = 1;

function add(num) {
    num++
    console.log(num);//2
}

add(num)
console.log(num);//1

//  function with out param -- works as global variable

const num = 1;

function add() {
    num++
    console.log(num);//2
}

add()
console.log(num);//2

// nested local scope

const name = 'Arjun'
function par() {
    name = 'prakash'
    function child() {
        console.log(name); // prakash
    }
}

// local variable declare ----------------------

function par() {

    let name = 'prakash'
    function child() {
        console.log(name); //prakash
    }
    child()
}

par()
console.log(name);// un defined
//

// --------------------------------------  Block Scope ------------------------------------------
//   let keyword is not allow out of block scope just like local scope 

if (true) {
    let name = 'prakash'
    function child() {
        console.log(name); //prakash
    }
    function nestedChild() {
        var name = 'arjun'
        console.log(name); //arjun
    }
    child()
    nestedChild()
}
console.log(name); // undefined


//   But var keyword will allow out of block scope cause it work as a functional scope

if (true) {
    var name = 'prakash' // ------ var key word used
    function child() {
        console.log(name);
    }
    function nestedChild() {
        var name = 'Prakasj'
        console.log(name);
    }
    child()
    nestedChild()
}
console.log(name);// prakash
// ----------------------------------------------------------------
let name = 'arjun'

function showName() {
    setTimeout(() => {
        console.log(name);
    })
}

showName() // prakash // cause settimeout is at function level and name is global level 
// so variable name is copied in settimeout not values

name = 'prakash'

// ----------------------------------------------------------
function add() {
    // var works at function level scope settimeout of i copied variable not its value. so at last values will show for all async settimeouts
    // for ran 5 times
    // setTimeout was placed in que
    // settimeout executes at i=5
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log('first inside loop ', i); // 5,5,5,5,5

        }, 0)
    }
    // let works at block scope so j is associate with 5 times of set time out
    for (let j = 0; j < 5; j++) {
        setTimeout(() => {
            console.log('second inside loop ', j); // 0,1,2,3,4
        }, 0)
    }
}

add();
// ------------------------------------------------------------------