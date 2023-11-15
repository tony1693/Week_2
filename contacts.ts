import { Person } from './person';
const persona4 = new Person("tony",30,"c/guada");

export class Contacts {
    
    public people: Person[];
    
    constructor(){
     this.people = [];
     
     
    }

    public printCalendar(){ 
        return this.people;
        
    }
}


