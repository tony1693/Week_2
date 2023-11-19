export class Book {
        private title:string;
        private nPages:number;
        private isbn:string;
        private author:string;
        private editorial:string;
    
    constructor( title: string , nPages: number , isbn: string , author: string , editorial: string) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    public getTitle():string {
        return this.title;
    }

    public getNpages():number {
        return this.nPages;
    }
    public getIsbn():string {
        return this.isbn;
    }
    public getAuthor():string {
        return this.author;
    }
    public getEditorial():string {
        return this.editorial;
    }
    public setTitle(newTitle):string {
        return this.title = newTitle;
    }
    public setNpages(newNpages):number {
        return this.nPages = newNpages;
    }
    public setIsbn(newIsbn):string {
        return this.isbn = newIsbn;
    }
    public setAuthor(newAuthor):string {
        return this.author = newAuthor;
    }
    public setEditorial(newEditorial):string {
        return this.editorial = newEditorial;
    }

    toString(){
         
        let libro = `Title - ${this.title}
        Number of Pages - ${this.nPages}
        ISBN - ${this.isbn}
        Author - ${this.author}
        Editorial - ${this.editorial}`;
        return libro;
    }

}
