
let persona = require('./person.js');
module['exports'] =persona;

const year = new Date().getFullYear()


class Persona {

    constructor(nombre,altura,peso ){
        this.nombre= nombre;
        this.altura = altura;
        this.peso = peso;
        this.colorPelo = "rubio";
        this.tonalidad = 'blanco';
        this.yearOfBirth = year - 1993;
        this.hobbies = [];
    }   
    


    calculoImc() {
         
     let resultado = this.peso / (this.altura * this.altura);
        return resultado
        
    }
    


    printAll(){
        for (let atributos in Persona){
            let resultado = atributos + "_:" + Persona[atributos];
            console.log(resultado);
        }
    
        
    }

    printHobbies(hobbies){
   this.hobbies.push(hobbies);
    }  
    
}
let my = new Persona ("tony",1.98,80);
my.printHobbies("padel , futbol , pc");
console.log(my);
