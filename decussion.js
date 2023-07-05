// You are given an array of strings. 
// Write a function that returns a new
//  array containing only the strings 
// that have a length greater than 5 and 
// start with the letter "a". If there are 
// no strings that meet the criteria, return an empty array.
 function number(array){
    let newArray =[];
    for(x =0;x<array.length;x++){
        let star =array[x];
        if (star.length > 5 && star.charAt(0) === 'a') {
            newArray.push(star)
    }   
 }
 return newArray;
}
let array =["gloria","hellen","apiu","ananama","angella","kiwi"]
newArray=number(array);
console.log(newArray);
// 2 66
function filterStrings(arr) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i];
      if (str.length > 5 && str.charAt(0) === 'a') {
        filteredArr.push(str);
      }
    }
    return filteredArr;
  }
  
  let arr = ['apple', 'banana', 'avocado', 'grapefruit', 'apricot', 'kiwi'];
  let filteredArr = filterStrings(arr);
  console.log(filteredArr);

// Write a function that takes a number 
// as input and returns the factorial of 
// that number. A factorial is the product 
// of all positive integers up to and including
//  that number. For example, the factorial 
// of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function data(rra){
    let nan =1;
    for(let z=rra;z>0;z--){
        nan *=z
    }
    return nan;
}
let rra =5;
console.log(data(rra))


// functions

//1 Create an array containing the names of all items in the inventory maximum of 10.
   let inventory =["gloria","hella","timothy","sonia"]
   let newaInt =[...inventory]
   console.log(newaInt)


// eg 2
   const invento = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10'];

// Create an array containing the names of all items in the inventory
const itemNames = [...invento];

// Print the array containing the names of all items in the inventory
console.log(itemNames);

//2 Create a separate array with the corresponding stock quantities of each item maximum of 10.
   let separatedArray=['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item10']
   let quantities=[1,4,2,6,7,9,10,8]
   console.log((quantities))

//3 Write a function to add a new item to the inventory, updating both arrays.

function addItems(name,quantity){
   if(invento.length<=10){
      console.log("inventory is full")
      return;

   }
   
      separatedArray.push(name)
      quantities.push(quantity)
    console.log("added" +name + "to inventory with a stock quanlity of" + quantity)  
   
}
addItems("glo" ,5)

//4 Write a function to update the stock quantity of an existing item.
function updateStock(nae,quany){
   let index = separatedArray.indexOf(nae)
   if(index===-1){
      connsole.log("item not found")
      return;
   }
   quantities[index]=quany
   console.log("added" +nae + "to inventory with a stock quanlity of" + quany) 
}
updateStock("item7",50)

//5 Write a function to calculate the total number of items in the inventory.
function calTotal(){
   var total =0
   for(i =0; i<quantities.length;i++){
      total+=quantities[i]
   }
   return total
}
console.log(calTotal())


//6 Write a function to find the item with the lowest stock quantity.
function getlower(){
   var toy =0
   for(x =0;x<quantities[toy];x++){
      if(quantities[x]<quantities[toy]){
         toy =x;
      }
   }
   return separatedArray[toy]
}
console.log(getlower())

// example
function greet(name, lastname){
   console.log("Hello" + " "+name+ " "+ lastname)
}
greet("gloria","lado")
greet("lado","mary")

// Write a function that takes a string
//  as an argument and returns true if 
// the string is a palindrome 
// (reads the same backwards and forwards) 
// and false if it is not.

function palin(str){
   let len = str.length;
   let mid =Math.floor(len/2);
   for (z=0;z<mid;z++){
      if (str[z]!==str[len -1 -z]){
         return false;
      }
   }
   return true;
}
let str =("dad")
console.log(palin(str))

function pap(string){
   
      if(string ==string.split("").reverse().join("")){
         console.log('true')
      }
      else{
         console.log("false")
      }
   }

let string ="mommy"
pap(string)



// classes

class Book{
   constructor(tittle,author,publicationYear){
      this.tittle=tittle
      this.author=author
      this.publicationYear=publicationYear

   }
   reading(){
      return `iam reading ${this.tittle} by ${this.author} produce in ${this.publicationYear}`

   }
 

}
     
class Novel extends Book{
   constructor(tittle,author,publicationYear,genre){
      super(tittle,author,publicationYear)
      this.genre=genre
   }
   readg(){
      return `iam reading ${this.tittle} by ${this.author} produce in ${this.publicationYear} with a unque ${this.genre}`
   
   
   }  
  
   }
   class Textbook extends Book{
      constructor(tittle,author,publicationYear,subject){
         super(tittle,author,publicationYear)
         this.subject=subject

   }
   read(){
      return `iam reading ${this.tittle} by ${this.author} produce in ${this.publicationYear} with a unque ${this.subject}`
   
   
   } 
}
class Magagine extends Book{
   constructor(tittle,author,publicationYear,issueNumber){
      super(tittle,author,publicationYear)
      this.issueNumber=issueNumber

}
read(){
   return `iam reading ${this.tittle} by ${this.author} produce in ${this.publicationYear} with a unque ${this.issueNumber}`


} 
}
 const books =new Book("Born a crime","Travor",2000)
 console.log(books.reading())
     
   












         




books =Book("Pride of predices","Charles","2023")
print(books.reading())
lat =Novel("beautiful queen","Lado","2021","lovely")
print(lat.readig())
obj2 =Textbook("Born a crime","Noah travor","1984","story")
print(obj2.readg())
obj3 =Magagine("Child in the forest","Gloria","2000","20")
print(obj3.readng())
      
   