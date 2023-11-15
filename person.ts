
 export class Person {
    
   public name: string;
   public age: number;
   private address: String;

   constructor(name: string , age: number , address: string){
    this.name = name;
    this.age = age;
    this.address = address;
   }

   public printName():void { 
    console.log(this.name);
   }

   public yearOfBirth(currentYear: number):number {
    let resultado = currentYear - this.age;
     return resultado;
   }

   public setAddress(address:string):string {
   return this.address = address;  
   }

   public getAddress():void {
     console.log(this.address);
   }

    


}



