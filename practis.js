// String using slice
let ans1="its alright";
let ans2 ="he is called jonny";
console.log(ans2);
console.log(ans1.length);
let text = "Apple, bananas, kiwi";
let part= text.slice(7,13);
console.log(part)
console.log(text.slice(-10,-2))
// using substr()
let pppp ="Apple, bananas, kiwi";
console.log(pppp.substring(7))
console.log(pppp.substring(-4))
// replacing String
let word ="please visit microsoftward!"
console.log(word.replace("microsoftward!", "wschool"))
let words ="please visit microsoftward! and microsoftward!"
console.log(words.replace(/microsoftward!/g, "wschool"));


// replace all
let ani ="cat ,rat";
console.log( ani.replaceAll(/cow/g, "dog"))
// String to uppercase
let text1 ="hello world!";
console.log(text1.toUpperCase("hello word!"))
let text2 ="MY BEAUTIFUL DOUGHTER!";
console.log(text2.toLowerCase("MY BEAUTIFUL DOUGHTER!"))
// concatenate
let text3 ="  hello world!   ";
console.log(text3.concat(" ", text2));
// trim
console.log(text3.trimEnd())
// pad
let text4 = "5";
let padded = text4.padStart(4,"0");
console.log(padded)
// charAt
let text5 ="HELLO, WORD"
console.log(text5.charAt(0))
// charCodeAT
console.log(text5.charCodeAt(0))
console.log(text5.split(","))
// indexOf
let www = "please locate where 'locate' occurs!"
console.log(www.indexOf("locate",15))
console.log(www.search(/cate/))

// Array method .filter
const items3=[
    {name: "bike", price: 100},
    {name: "tv",   price: 200},
    {name: "book", price: 5  },
    {name: "phone", price: 500},
    {name: "computer", price: 1000},


]
const filteritem = items3.find((x)=>{
    return x.name==="book"
})
console.log(filteritem)
.map
const items4=[
    {name: "bike", price: 100},
    {name: "tv",   price: 200},
    {name: "book", price: 5  },
    {name: "phone", price: 500},
    {name: "computer", price: 1000},
]
let filtername = items4.map((y)=>
{
    return y.name
    
})
console.log(filtername)
// .length
const fruits =["Bananas","Orange","Apple","Mangos"]
console.log(fruits.length)
// .find
// let founditem =items3.find((u)=>{
//     returnu.name==="book"
// })
// console.log(founditem)
// for each
const items5=[
    {name: "bike", price: 100},
    {name: "tv",   price: 200},
    {name: "book", price: 5  },
    {name: "phone", price: 500},
    {name: "computer", price: 1000},
]
items5.forEach((h)=>{
    console.log(h.price)

})


function divi(arr);{
    if(arr.length<=1){
    return arr
}

let mid = Math.floor(arr.length/2);
let left = arr.slice(0,mid);
let right =arr.slice(mid);

return merge(divi(left),divi(right))
}

function merge(left,right){
    let empty=[]
while (left.length && right.length){
if(left[0]<right[0]){
    empty.push(left.shift())
}
else{ empty.push(right.shift());

}
}
return [...empty,...left,...right]

}
let a =[3,10,33,50,2,5]
console.log(divi(a))


// merge sort
// function divedeArray(array){
//     if (array.length<=1){
//     return array;
//     }
//     let middle =Math.floor(array.length/2);
//     let left = array.slice(0,middle);
//     let right =array.slice(middle);
//     return sortedArray(divedeArray(left),divedeArray(right))
// }
// // push add element at the end
// // shift -removes an element at index [0]
// // unshift -add an an element at index [0]
// function sortedArray(left,right){
//     let newEmptyArray=[]
//     while (left.length && right.length){
//         if (left[0]<right[0]){
//             newEmptyArray.push(left.shift())
//         }
//         else{
//             newEmptyArray.push(right.shift())
//         }
// }
// return[...newEmptyArray,...left,...right]
// }
// let hopper =[-6,20,8,-2,4]
// console.log (divedeArray(hopper))


// mergeSort JavaScript
function addedArray(arr){
    if(arr.length<=1){
        return arr
    }
    let middle =Math.floor(arr.length/2)
    let left = arr.slice(0,middle);
    let right =arr.slice(middle)
    return sortedA(addedArray(left),addedArray(right))
}

function sortedA(left,right){
    let empty =[]
    while(left.length &&right.length)
    if(left[0]<right[0]){
        empty.push(left.shift())
    }
    else{
        empty.push(right.shift())
    }
    return[...empty,...left,...right]
}
let num =[5,7,8,2,1,4,3]
console.log(addedArray(num))