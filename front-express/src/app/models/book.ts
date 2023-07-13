export class Book {
    id:number;
    isbn:number;
    title:string;
    author:string;
    year:string;
    libraryId:number;

    constructor (id:number, isbn:number, title:string, author:string, year:string, libraryId:number )

    {

        this.id=id;
        this.isbn=isbn;
        this.title=title;
        this.author=author;
        this.year=year;
        this.libraryId=libraryId;

    }
}
