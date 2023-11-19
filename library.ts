import { Book } from "./book";

export class Library{
        private books:Book[];
        private address:string;
        private manager:string;
    
    constructor(books:Book[] , address:string , manager:string){
        this.books = [];
        this.address = address;
        this.manager = manager;
    }
    public getAddress():string {
        return this.address;
    }
    public getManager():string {
        return this.manager;
    }
    public setAddress(newAddress):string {
        return this.address = newAddress;
    }
    public setManager(newManager):string {
        return this.manager = newManager;
    }
    public toString() {
      return this.books;
        
    }
    public getNumberOfBooks() {
        return this.books.length;
    }
    public findByAuthor(author:string):Book[]{
        return this.books.filter(book => this.books.toString() === author);
    }
}

const author = new Book("el quijote" , 500 , "Wep", "Miguel de Cervantes" ,"anaya" );