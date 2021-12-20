// ---------------- for loop ------------------------
//  for loop and for in , for each works at index of element
// for in ,for each ignore the empty arrays
// for of and for loops won't ignore spaces

// --------------- for vs for each ----------------------------------
//  for each works variable as block level scoped
//  for loop you can break out earlier
// Lower chance of accidental errors with the i <= >= etc
// he biggest differences are that a foreach loop processes an instance of each element in a collection in turn, while a for loop can work with any data and is not restricted to collection elements alone. 

let arr = ["Apple", , "Orange", , "Pear"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Apple,undefined,Orange,undefined,Pear 
}
// --------------- for in loop for objects-------------------------------------
//  for in works at index level hence we mostly use for object iteration
let user = {
    name: 'arjun',
    age: 28,
    role: 'dev'
}

for (let key in user) {
    console.log(key, user[key]);// name arjun , age 28 , role dev
}
// -----------------------------------------------------------------------
let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
    // arr[0] , arr[1] ,arr[2]
    console.log(arr[key]); // Apple, Orange, Pear // cause for in worked at index level
    console.log(key); // 0,1,2
}
// ----------------------------------------------------------------------------------
let arr = ["Apple", , "Orange", "Pear", { id: 1 }, ,];

for (let key in arr) {
    console.log(key); // 0,2,3,4 // for in  ignores empty values
}

//  ----------------- for of loop in arrays----------------------------------------------
//   for of works at element level hence we mostly use for arrray iteration
let arr = ["Apple", "Orange", "Pear"];

for (let key of arr) {

    console.log(key); // Apple, Orange, Pear // cause for in worked at index level
}
// for of can work ar index level using array.entries
let arr = ["Apple", , "Orange", , "Pear"];
console.log(arr.entries());// Object [Array Iterator] {}

for (const [i, v] of arr.entries()) {
    console.log(i, v); // 0 Apple, 1 undefined,2 Orange,3 undefined,4 Pear 
}
// -----------------------------------------------------------------
let arr = ["Apple", , "Orange", "Pear", { id: 1 }, ,];

for (let key of arr) {
    console.log(key); // Apple,undefined,Orange,Pear,{ id: 1 },undefined // for of don't ignores empty values
}

// ------------- for each loop ----------------------------------------------------------------
// iterates function for each element of arrray
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});