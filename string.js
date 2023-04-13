// String method .slice
let fruitts= "applemangograve"
console.log(fruitts.slice(5,10))

let name1 ="GloriaLado"
console.log(name1.slice(0,6))

// coverting  substring to tittle case
let message ="hello my beautyful girl";
let letter=message.split(' ')
let letter2 =letter.map(word =>word.charAt(0).toUpperCase() 
+word.substring(1).toLowerCase())
console.log(letter2)
console.log('Hello world')

let num =10;
num *=3;
console.log(num)

console.log('hi!'.length)
let sale =true;
sale = false;
if(sale){
    console.log('Time to buy');

}
else{
    console.log('Time to wait for a sale.')
}

// comparison operators
let hungerLevel =7;
if(hungerLevel >7){
    console.log('Time to eat!')
}
else{
    console.log('We can eat later!')
}
let lala = 50
if(lala <= 10){
    console.log('i love codding')
}
else{
    console.log('more especially javescript')
}
// logical operators
let  mood ='sleepy'
let tiredness = 6
if(mood==='sleepy'&& tiredness>8){
 console.log('time to sleep')
}
else{
    console.log('not bet time yet')
}

// true and false statement
let word =0
if(word){
    console.log("Great! you'va started your work!");

}
else{
    console.log("Better get work!.")
}
// Ternary Operator
// Else if satements
// the switch keyword


// Write a function that takes in an array of 
// numbers and consoles the first four items
//  multiplied by 8 and the last two added by 5.
//   Console the array with the new values

function MyAray(array){
    let multiArray =array.slice(0,4).map(num => num *8);
    let addArray = array.slice(-2).map(num=>num +5);
    let allArray=[...multiArray,...addArray];
    console.log(allArray);


}
let number =[2,4,6,8,10,12,13]
MyAray(number)