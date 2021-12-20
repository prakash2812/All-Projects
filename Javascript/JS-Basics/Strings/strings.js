//  -------------- string Literals --------------
let string = ' this is literal ' // single quoted or double 
let data = `this is backticks ${string} string`
let guestList = "Guests:\n * John\n * Pete\n * Mary"; // new line and \' or \"

// ------------------- string Object ---------------------

let name = new String(string)
// console.log(name);

// ------------------- string methods ----------------------------------------------------------------
let user = ' this is literal'
user.length //16
user.toUpperCase() // THIS IS LITERAL
user.toLowerCase() // this is literal
user.includes('is', 7) // false 

let dataSplit = user.trim().split(' ')
dataSplit  // ['this','is','literal']

dataSplit.length //3

user.charAt(2) //h

// find ral for 1st occurence
user.indexOf('ral', 1) // if true then returns position of found 13 //
user.indexOf('This') // if false not found return -1
user.lastIndexOf('literal')//9 // start search from end/back

user.startsWith('') // true beacause space if no space also  true
user.endsWith('literal')//true

user.slice(1, 8) //this is //(1 to 7) range
user.slice(1) // this is literal // 1 to end 

user.substr(1, 6) // this i // start with number of length

user.substring(1, 8) // this is
user.substring(8, 1) // this is // substring allow start is greater than end



