const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

// `1.`Create a function called getAvailableBooks that returns an array of all available
// books.
function getAvailableBooks(){
    let emptybook =[];
    for(let i=0;i<books.length;i++){
        if(books[i].isAvailable){
            emptybook.push(books[i])
        }
    }
return emptybook;

}
console.log(getAvailableBooks());
// 2
function getAvala(){
    return books.filter(book=>book.isAvailable)
}
console.log(getAvala())


// event number
function eventNumber(numbers){
    return numbers.filter(x =>x%2===0)
}
let numbers =[2,4,3,2,5,6,7,8]
console.log(eventNumber(numbers))
// 2
function enventNo(nums){
    let emptyevent=[]
    for(x in nums){
        if(x%2===0){
            emptyevent.push(nums[x])

        }
    }
    return emptyevent;
}
let nums =[2,4,5,3,6,7,8,1]
console.log(enventNo(nums))
// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

function getBooksByAuthor(authorName){
return books.filter(book => book.author === authorName);
}
let authorName = 'Fyodor Dostoevsky'
console.log(getBooksByAuthor('Fyodor Dostoevsky'));
 


// 2
function getAuthor(authorName){
    let emptyauthor=[]
    for(let x= 0;x<books.length;x++){
        if(books[x].author===authorName){
            emptyauthor.push(books[x])
        }
    }
    return emptyauthor;
}
let author ='Fyodor Dostoevsky'
console.log(getAuthor(author))

// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
//     publicationYear, and isAvailable).
function addNewBook(book){

   if(!book.title||!book.author||!book.publicationYear||!book.isAvailable){
    return books.push(book)
   }
 
}
let book ={title:"black November",author:"gloria darling",publicationYear:2021,isAvailable:true}

console.log(addNewBook(book))
console.log(books)



// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(bookTittle){

let bookTittle=books.findIndex(book => book.title===bookTittle);
if(bookTittle!==-1){
    console.log("book  found")
}
else{
    console.log("book not found");
}

}
let bookTittle ="Crime and Punishment"
console.log(checkoutBook("Crime and Punishment"))


// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

