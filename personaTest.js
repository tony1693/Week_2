const Persona = require("./persona.js");
const person2 = new Persona("nuria" , 1.64 , 63);
person2.hobbies.push("padel");
person2.hobbies.push("netflix");
console.log(person2);
console.log(person2.calculoImc());