let contac = require('./contacts.js');
module['exports'] = contac;

class Contacts {
    constructor([]){
        this.arrayObjets = [];
    }    

    printPerson(){
        for (let atributos in Persona){
            let resultado = atributos + Persona[atributos];
            this.arrayObjets.push(resultado);
        }
    }
}