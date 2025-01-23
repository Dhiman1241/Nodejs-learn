//! start unpacking/ importing
//! we have 2 different ways to import

//! === 1st way
// syntax:
// let/ const variableName = require("path of the file");
//  require() is a method
//? example --> let value = require("./app.js")

//! relative path --> relative path refers to the path which is relative to the file we are currently using
// absolute path --> absolute specifies the path from the root

let value = require("./app");
// console.log(value);
/* value = {
  printHello: [Function: printHello],    
  printMyName: [Function: printMyName],  
  var1: 'abc',
  arr: [ 'html', 'css', 'js' ]
} */

console.log(value.printHello());
value.printMyName("abc");
console.log(value.var1);
console.log(value.arr);
