Array.prototype.accessName = function (ele) {
  console.log(ele);
};

arr.accessName("xyz");

//function as a constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getDetails = function () {
  console.log(`My name is ${this.name} and age is ${this.age}`);
};

let p = new Person("xyz", 19);
console.log(p); // {name:"xyz" , age:19}
p.getDetails();

/* optional chaining allows you to access deeply nested properties of an object
  without having to check if each property in the chain is null or undefined.
  If object is null or undefined it doesnt throw an error instead if returns 
  undefined */

let Person = {
  name: "xyz",
  addrss: {
    city: "pune",
  },
};

console.log(Person.address.location); // throw arror
console.log(Person?.address?.location); // undefined
