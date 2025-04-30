//1. Object literal

let Person = {
  name: "xyz",
  age: 20,

  accessDetails: function () {
    console.log(`My name is ${this.name} & age is ${this.age}`);
  },
};

console.log(Person.accessDetails());
