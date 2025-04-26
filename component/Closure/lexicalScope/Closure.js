//Closure enables a function to access a variables even after its scope closes.

// function outer() {
//   let a = 20;

//   return function inner() {
//     let b = 30;
//     console.log(b);
//     console.log(a);
//   }
// }

// let xyz = outer();
// console.log(xyz)


//Lexical scope means inner function can access the properties of outer function.

function outer() {
    let a = 20;
  
    function inner() {
      let b = 30;
      console.log(b);
      console.log(a);
    }

    inner();
  }
  
  outer();