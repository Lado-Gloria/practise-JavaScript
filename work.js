// Write a JavaScript function that reverses a number.
function number(num){
 let num1=num.toString().split('').reverse().join('')
 let num2 =parseInt(num1);
 
console.log(num1)
console.log(typeof(num2))

}
let num =86
number(num)

//  Write a JavaScript function that checks whether
//  a passed string is a palindrome or not.
function ispalindrome(str){
       str.split('').reverse().join('')
if(str[0]===str[0]){
    console.log("true")
}
else{
    console.log("false")
}
}
let str="dad"
ispalindrome(str)
//  Write a JavaScript function that generates
//  all combinations of a string.
function substrings(str1){
let array1 = [];
  for (let x = 0, y=1; x < str1.length; x++,y++){
   array1[x]=str1.substring(x, y);
    }
let combi = [];
let temp= "";
let slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++){
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("dog");

// 2method

function substrings(strt) {
    const result = [];
    
    function search_combination(start, curr) {
      if (curr.length > 0) {
        result.push(curr);
      }
      for (let i = start; i < str.length; i++) {
        search_combination(i + 1, curr + strt[i]);
      }
    }  
    search_combination(0, '');
    return result;
  }
  const strt = 'dog';
  const result = substrings(strt);
  console.log(result);



  // creating todoist


  class TodoList{
    constructor(){
      this.todoist=[]
      this.isCompleted=false
    }

    addTask(task){
      this.todoist.push(task)
      return(this)
    }

    taskCompleted(task){
      if(task){
        return this.isCompleted=true
      }
    }
      totalnumberOfTask(){
        return this.todoist.length

      }
    }
  
  const list1 =new TodoList()
  console.log(list1.addTask("wangari"))
  console.log(list1.addTask("waaaaaa"))
  console.log(list1.taskCompleted("walalla"))
  console.log(list1.totalnumberOfTask())



  // writes a function to reverse a number
  function reversenumber(num){
    let num1=num.toString()
    let reversenu=num1.split().reverse().join()
    let finalreverse =reversenu.parseInt()
    return finalreverse
    
  }