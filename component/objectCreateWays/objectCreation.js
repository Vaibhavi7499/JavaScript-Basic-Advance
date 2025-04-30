//1. Object literal

let Person = {
  name: "xyz",
  age: 20,

  accessDetails: function () {
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

  drive = function () {
    console.log(`car color is ${this.color} & model is ${this.model}`);
  };
}

let c = new Car("white", "tata-punch");
console.log(c.drive());
