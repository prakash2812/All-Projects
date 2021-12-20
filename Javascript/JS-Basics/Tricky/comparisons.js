// https://www.youtube.com/watch?v=mat1O5JI2fg&list=PLyuRouwmQCjkYdv4VjuIbvcMZVWSdOm58&index=150

// in comparisons == different types convert in to numeric
// im logical operators && || diff types converts in to Boolean  
Number() // 0
String()//''
Boolean() // false
console.log(0 == ''); // true // empty string convert into numeric that is zero // Number('') = 0
console.log("0" == ''); //false // same datatype so no conversion // so empty value is not equal to zero
console.log("app" == 'App'); //false // for string it compare char by char. small char have big number
console.log("app" > 'App'); //true // for string it compare char by char. small char have big number
console.log("0" == 0); // true // diff data types convert in to numeric // "0" is string so its value is convert to numeric is 0 //so 0 == 0
console.log(false == 'false'); // false // Number('false') is NaN and Number(false) is 0 // so 0 == NaN is false
console.log(true == 'true'); // false // Number('true') is NaN and Number(true) is 1 // so 1 == NaN is false
console.log(false == '0'); // true // string value is become numeric as 0 and Number(false) is 0 // so 0 ==0
console.log([1] == [1]); //false // for arrays and objects it compares memory location not values
console.log(1 == [1]); //true // [1] converts to number 1 and then 1 == 1 is true
console.log(0 == []); //true // [] converts to number 0 and then 0 == 0 is true
console.log(0 == {}); //false // {} converts to number NaN and then 0 == NaN is false
console.log(1 == ["1"]); //true // [1] converts to number 1 and then 1 == 1 is true
console.log(1 == ["name"]); //false // ["name"] converts to number 1 and then 1 == 1 is true
console.log({} == {}); //false // for arrays and objects it compares memory location not values
console.log(NaN == NaN); // false // NaN doesn't have anything
console.log(NaN == 'false'); // false // NaN == NaN // Number('false') is NAN


// in logical operators diff types convert in to boolean

// null and undefined are linked they only equal each other

console.log(null == 0); // false //null can't equal to any except undefined
console.log(null === 0); // false //null can't equal to any except undefined
console.log(null > 0); // false //null can't equal to any except undefined
console.log(null < 0); // false //null can't equal to any except undefined
console.log(undefined > 0);// false //numeric conversion undefined is as NAN
console.log(null == undefined); // true
console.log(null >= 0); // true // for > operator nul converts to zero of numeric
// ----------------------------------------------------------------------------------------------------------------
// type casting and coercing in JavaScript
//
// String(), +, Number(), +, -, Boolean(), !, !!
// toString(), valueOf()
// parseInt(), parseFloat()
// unary plus, logical NOT, addition operator, comparison operators
let log = console.log;
let n = '56';
//log(-n, +n);
// =================================================================================================
//                              String,         Number,       Boolean
let obj = { a: 1, b: 2 }; // '[object Object]'    NaN           true
let emptyObj = {}; //       '[object Object]'     NaN             true
let arr = [1, 2, 3]; //     '1,2,3'              NaN              true 
// [1] to Number would become 1
// If there is only one number in the array then 
// that becomes the numeric conversion.
let emptyArr = []; //       ''                   0              true
let str = 'hello'; //       'hello'             NaN             true
let emptyStr = ''; //         ''                 NaN           false   ('43'=>43, '0'=>0)
let num = 1; //               '1'               1              true
let zero = 0; //            '0'                 0               false
let T = true; //            'true'              1               true
let F = false; //            'false'             0               false
//  null    //               'null'              0              false
//  undefined   //      'undefined'             NaN            false
//  NaN       //             'NaN'             NaN             false
// ================================================================================================================

/**
 * Plus vs Concatenation
 * exp1 + exp2
 * if either exp1 or exp2 is a string then treat the '+' as a concatenation
 *  coerce both values to Strings as needed
 *
 * if neither exp1 or exp2 is a string then treat the '+' as an addition operation
 *  coerce both values to Numbers as needed
 *
 */

//log(F + num);
//"234234".toLowerCase()
// Falsey values - false, 0, '', null, undefined, NaN
// Truthy values - Everything else....
// Boolean() != new Boolean(), String() != new String(), Number() != new Number()
// Boxing of Primitives
// Boolean() == !!  (! will flip truthiness too)
// Number() == +  (- will flip sign too)
// String() == .toString() unless null was set as the prototype of the Object

//log(Boolean(234), Boolean(0), new Boolean(0));
//log(true && Boolean(new Boolean(0)));

// && compares the two operands and then actually returns
// the second if the first is truthy

// Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

log(!arr < +T || !!arr > +emptyArr);
//unary plus 17, logical NOT 17, less than 12, greater than 12, logical OR 6
// (false < 1 || true > 0)
// ( 0 < 1 || 1 > 0 )
// ( true || )
// true

log(1 + -+(+(+-+1))); //2

