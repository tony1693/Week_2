const Contacts = require("./contacts.js");
const Persona = require("./persona.js");

const tony = new Persona("tony", 1.90 , 80);
const agenda =new Contacts();
agenda.arrayObjets.push(tony);
agenda.printPerson();
console.log(agenda);



