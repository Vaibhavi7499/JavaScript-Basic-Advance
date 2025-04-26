/* Deep copy means copy all the members of the old object into new , allocates 
separate memory location for new object */

let arr=[1,2,3,4,5];
let arr1=[...arr];

let a = {id:1 , name : "abc"};
let b = {...a};

b.name = "xyz";
b.city = "Pune"
console.log(b)
console.log(a)

/* Shallow copy means reference variable is copied into new reference variable
 using assignment operator , shallow copy of the reference variable is created
 Both old and new reference variable is point to the same object in memory */

 let obj = {id:1 , name : "abc"};
 let newObj = obj;
 newObj.name="xyz";
 console.log(obj)
 console.log(newObj)