/* Generator is a special type of function that can be paused and resumed.
In js generators are created using function* syantax. It can yield multiple
values over time rather than returning them all at once.
yield keyword is used to pause the function & return a value. When next() is
called on a generator it resumes from where it left off until the next yield.*/

function* simpleGenerator() {
  yield "a";
  yield "b";
  yield "c";
}

const gen = simpleGenerator();
console.log(gen.next()); //(value:'a' , done : false)
console.log(gen.next()); //(value:'b' , done : false)
console.log(gen.next()); //(value:'c' , done : false)
console.log(gen.next()); //(value:undefined , done : true)
