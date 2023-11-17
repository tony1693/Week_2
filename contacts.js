const Persona = require("./persona.js");

class Contacts {
    constructor(){
        this.arrayObjets = [];
    }    

    printPerson(){
        for (i=0;i < this.arrayObjets.length; i++){
            this.arrayObjets[i].printAll();
        }
    }
}
module.exports= Contacts;
const tony = new Persona("tony", 1.90 , 80);
