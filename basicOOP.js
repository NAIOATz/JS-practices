// Object literals
const person = {
    name: "John",
    age: 30,
    run: function(){console.log("Run")}
}

const obj = {
    name: "Hun",
    age: 15,
    age:20, // value แทนตัวแรก
    fruit: ["banana", "apple", "grape"],
    emp: [
        {name: "jame", role:"dev"},
        {name: "ham", role:"maketing"}
    ]
}

obj.newkey = "if js, it's possible"
delete obj.name;
console.log(obj)

const book={isbn:12345678, title:'Introduction to JS',authors:[{firstname:'John'}, {lastname:'Smith'},{firstname:'Danial'}, {lastname:'Doh'}], versions:[1.0, 2.0,3.0], isAvailable:true, getISBN(){return this.isbn}}
// console.log(book)
// console.log(book.getISBN())

// console.log(book.authors[0].firstname)
// console.log(book.authors)

// ----------------------------------------------------------------------------

// Constructor functions

// function Book(isbn, title){
//     this.isbn = isbn
//     this.title = title
// }

// const B1 = new book(123, 'heat')
// const B2 = new book(124, 'cap')

// ==============================================================================

// ES6 Classes
class Book{
    constructor(isbn, title){
        this.isbn = isbn
        this.title = title
    }
    getISBN(){
        return this.isbn
    }
    setTitle(title){
        this.title = title
    }
    getBookInfo(){
        return `isbn: ${this.isbn}, title: ${this.title}`
    }
}

const myBook = new Book(12345, "js")
console.log(myBook.getBookInfo())
console.log(myBook.getISBN())
console.log(myBook.setTitle("New js"))
console.log(myBook.getBookInfo())
console.log("===================================================")


// ======================================

const b1 = {id : 1, title : "js"}
const b2 = {id : 1, title : "js"}

function compareBook(x,y){
    return x.isbn === y.isbn ? true : false
}

console.log(b1==b2)
console.log(b1===b2)

// ================================

const keys = Object.keys(b1)
const values = Object.values(b1)
console.log(keys)
console.log(values)