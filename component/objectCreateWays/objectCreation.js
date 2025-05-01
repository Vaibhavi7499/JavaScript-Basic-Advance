//1. Object literal

let Person = {
  name: "xyz",
  age: 20,

  accessDetails(){
    console.log(`My name is ${this.name} & age is ${this.age}`);
  },
};

console.log(Person.accessDetails());

//2. Object with a constructor

class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  drive() {
    console.log(`car color is ${this.color} & model is ${this.model}`);
  };
}

let c = new Car("white", "tata-punch");
console.log(c.drive());

/**
 * 3
 * using new keyword 
 */

function Person(name,age) {
  this.name = name,
  this.age = age
}

Person.prototype.getDetails = function() {
console.log(`my name is ${this.name} and i am ${this.age} years old`)
}

let p = new Person('John',30)

console.log(p.getDetails())


/**
 * Object.create(objName)
 */

let obj = {
  name : 'john',
  age : 35
}


let newObj = Object.create(obj)


