let persona = require("./person.js");

let nuria = new Persona ("Nuria",1.70,60);

class Contacts {
    constructor([]) {
        this.arrayObjets = [];
    }    

    printPerson(){
        for (let atributos in Persona){
            let resultado = atributos + Persona[atributos];
            this.arrayObjets.push(resultado);
        }
    }
}