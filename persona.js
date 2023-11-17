

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
        for (let atributos in this){
            let resultado = atributos + "_:" + this[atributos];
            console.log(resultado);
        }
    }
s
    printHobbies(){
        console.log(this.hobbies);
    }  
    
}
let my = new Persona ("tony",1.98,80);
my.hobbies.push("padel");
my.hobbies.push("futbol");

my.printHobbies();
console.log(my);

module.exports= Persona;




