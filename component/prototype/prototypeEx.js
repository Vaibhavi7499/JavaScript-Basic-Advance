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
