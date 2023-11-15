import { Person } from './person';
const person2 = new Person("nuria" , 30, "C/conts");

const person1 = new Person("tony" , 30 , "adssa");

console.log(person1.yearOfBirth(2023));
console.log(person1.printName());
console.log(person1.setAddress("c/cont"));
console.log(person1.getAddress());
 
console.log(person2.yearOfBirth(2023));
console.log(person2.printName());
console.log(person2.getAddress());