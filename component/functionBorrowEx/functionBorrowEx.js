let Person = {
  name: "Kishor",
  age: 30,

  printInfo: function (city) {
    console.log(
      `My name is ${this.name} & age is ${this.age} , I am from ${city}`
    );
  },
};

let Employee = {
  name: "Vaibhavi",
  age: 21,
};

//let a = Person.printInfo.call(Employee,"Pune");
//let a = Person.printInfo.apply(Employee,["Pune"]);
//console.log(a)
let a = Person.printInfo.bind(Employee, "Pune");
console.log(a());
