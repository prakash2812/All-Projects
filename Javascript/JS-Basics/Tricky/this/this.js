// ------------------------ this -------------------------------------------------------------
// 1) this in a function reference the execution context of that particular call
// 2) this values is always determined how a function is called

// this reference the Object  that is executing the current function
// if any methods belongs to object then this directly refers to that Object
// if regular function then this refers (window in browser/ Global in node)

//  object method lo this untey -> obj
//  function -> (window/global)

let book = {
    title: 'RichDad',
    pages: [1, 2, 3, 4],
    show() {
        console.log(this.title)
    },
    Pages() {
        this.pages.forEach(function (key) {
            console.log(this.title, key);//this points to window cause function is not a method of book object , 
            // it a regular function so this .title will undefined and this will return window
        })
    },
    Pages1() {
        // foreach(func, thisArg)
        this.pages.forEach(function (key) {
            console.log(this.title, key);//this points to object of book and title will return "RichDad" 
        }, this)
    }
};

book.newShow = function () {
    console.log(this.title); // title return "richDad" cause it still an object method(function) its not regular function
}

console.log(book.show());
console.log(book.newshow());
console.log(book.pages());
console.log(book.pages1());
// -------------------------- constructor lo this --------------------------------
function User(id) {
    this.title = "Dark secrets"
    this.id = id
    console.log(this); //{title:'dark secrets',id:2}
}

let data = new User(2)


// ----------------------------------------------------------------------------------------

global.a = 10;
global.b = 20
function Add() {
    // console.log(this)
    // this ={}
    this.a = 30,
        this.b = 40
    //  In regular function, this points to global 
    function add1() {
        // console.log(this)
        console.log(this.a + this.b)//30
    }
    add1()

    // In object function , this points to object/function 
    /* this.add1 = function () {
        console.log(this.a + this.b)
    } */
    // return this
}
Add()// with out new this points to global
new Add() // with new this points to object
new Add().add1()


// -----------------------------------------------------------------------------

const lives = 0;
function catCircus() {
    this.lives = 1;
    const lives = 2;

    const cat1 = {
        lives: 5,
        jumps: () => {
            console.log(this.lives);
        }
    };
    cat1.jumps(); // 5 - 1
    //console.log(cat1); 

    const cat2 = {
        lives: 5,
        jumps: () => {
            console.log(lives);
        }
    };
    cat2.jumps();//5 -2 
    //console.log(cat2);

    const cat3 = {
        lives: 5,
        jumps: () => {
            const lives = 3;
            console.log(lives);
        }
    };
    cat3.jumps();//3
    //console.log(cat3); 

    const cat4 = {
        lives: 5,
        jumps: function () {
            console.log(lives);
        }
    };
    cat4.jumps();//5 -2
    //console.log(cat4); 

    const cat5 = {
        lives: 5,
        jumps: function () {
            var lives = 4;
            console.log(lives);
        }
    };
    cat5.jumps();//4
    //console.log(cat5); 

    const cat6 = {
        lives: 5,
        jumps: function () {
            console.log(this.lives);
        }
    };
    cat6.jumps(); //5
    // console.log(cat6); 

    const cat7 = {
        lives: 5,
        jumps: function thrownOutOfWindow() {
            console.log(this.lives);
        }
    };
    cat7.jumps();//1 -5
    //console.log(cat7); 
}

catCircus()

// -------------------------------- imp -----------------------------------------------------------------------------
function show() {
    this.name = 'aryan'
    let user = {
        name: 'arjun',
        age: 12,
        parent: () => {
            // console.log('parent', this)
            console.log(this.name)
        },
        child: {
            name: 'prakash',
            parent1: function () {
                // console.log('parent1', this)
                console.log(this.name)
            }
        }
    }

    user.parent()
    user.child.parent1()
}
show()

// ------------------------------- imp difference ------------------------------------------

function Add() {
    // console.log(this)
    // this ={}
    this.a = 30,
        this.b = 40
    //  In regular function, this points to global 
    function add1() {
        console.log(this)
        console.log(this.a + this.b)//30
    }
    add1()
}
Add() // this goes to global object
// new Add() // this goes to empty object , in that empty u r assigning this.a 
// if u use () => this goes to function add, if function again it will go to global



function Add() {
    // console.log(this)
    // this ={}
    this.a = 30,
        this.b = 40
    //  In regular function, this points to global 
    add1 = () => {
        console.log(this)
        console.log(this.a + this.b)//30
    }
    add1()
}
// Add()
// new Add()

// -----------------------------------------------------------------------------------

function User() {
    this.name = 'arjun',
        this.show = () => {
            console.log(this)
            console.log(this.name)
        }
}

let say = new User()
say.show()