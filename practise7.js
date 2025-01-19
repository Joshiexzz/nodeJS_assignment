let book = {
    title:'Harry Potter',
    author:'JK Rowling',
    year:1997,
    genre:'Fantasy'
}
const getBook=(book)=>{
    
    return `Title:${book.title}, Author ${book.author} Published in:${book.year}`
}
console.log(getBook(book)) 

book.rating = 4.47
console.log(book) 
