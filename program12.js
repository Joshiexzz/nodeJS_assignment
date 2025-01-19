class Book{
    constructor(title,author,year){
        this.title=title
        this.author=author
        this.year=year
    }
    display(){
        console.log(`Title:${this.title} \nAuthor:${this.author} \nYear:${this.year}`);    
    }
}
let b=new Book('Harry Potter','JK Rowling','1997')
b.display();