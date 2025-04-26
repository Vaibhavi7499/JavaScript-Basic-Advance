/* Primitive datatypes are immutable we can not change even after its creation ,
they pointing to the different memory location. */

let a = 20;
let b = a;
b = 30;
console.log(a);
console.log(b);

/* Reference datatypes are mutable you can change after its creation , pointing 
to same memory location */

let Person = {
  name: "xyz",
};

let Student = Person;
Student.name = "abc";

console.log(Person.name);
console.log(Student.name);
