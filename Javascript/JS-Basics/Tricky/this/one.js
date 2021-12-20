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
// --------------------------------------------------------------------