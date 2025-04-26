/* currying in js is a process that allows you to transform a function into
   a sequence of nested function.
   
   It allows you to avoid passing the same variable multiple times.
   It allows you to create a higher order function. */

   function sum(a){
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
   }

   console.log(sum(10)(20)(30));