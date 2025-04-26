/* Hoisting means all the javascript variables and functions declarations 
  are moved on to the top. */

// let variable can not be hoisted.

printHello();

function printHello() {
  console.log("hello");
}

//console.log(a);
let a = 10; //through an error

//console.log(b);
var b = 10; // undefined
