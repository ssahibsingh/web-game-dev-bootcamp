// ! Template Literals

// Before ES6
// const name = "Khushi"
// const age = 21

// document.write("Hello, My name is ", name, " & I am ", age, " years old. <br />");
// // or
// document.write("Hello, My name is " +  name + " & I am " + age + " years old.");

// After ES6
// document.write(`Hello, My name is ${name} & I am ${age} years old.`);

// ? ---------------------------------------------------------------------------------------------------------

// ! Arrow Functions

// Normal Functions ----- A block of code designed to perform a particular task.
// function keyword is used to define the function in js


// function sum(a,b){
//     document.write(a+b)
// }

// sum(50 , 25)


// return a value from a function

// function sum(a,b){
//     return (a+b)
// }

// let x = sum(50 , 25)
// document.write(x)


// function expression

// let sum = function(x, y){
//    document.write("Sum : ", x + y)
// }

// sum(25,75)


// AFTER ES6

// No function or return keyword is used

// let sum = (x, y) => {
//     document.write("Sum : ", x + y)
// };

// sum(25,75)


// ?-----------------------------------------------------------------

// ! var vs let


// calling x after definition
// var x = 5;
// document.write(x, "<br />");

// // calling y after definition 
// let y = 10;
// document.write(y, "<br />");

// // calling var z before definition will return undefined
// document.write(z, "<br/>");
// // var z = 2;

// // calling let a before definition will give error
// document.write(a);
// // let a = 3;
// // document.write("demo \n class");

// ? var variables can be re-decalred and updated in same scope but not let variables

// function test(){
//     var a = 10;        
//     var a = 20;   
//     // a  = 20
//     document.write(a);
//   }
// test();


// function test(){
//     let a = 10;        
//     // let a = 10;
//     a = 10   
//     document.write(a);
//   }
// test();

// for(let i=1; i<=5;i++ ){
//     document.write(i);
// }

// document.write(i);


//  ? ----------------------------------------------------------------------------
// ! Array

// using literal
const fruits = ["Orange", "Apple", "Mango"];

// or using Array constructor
// const fruits = new Array("Orange", "Apple", "Mango");

// Accessing the array values == using index value

// let size = fruits.length;
// for (let i=0 ; i<size; i++){  
//     document.write(fruits[i] + "<br/>");  
// } 


// pushing an element into the array

// fruits.push("Banana");

// for (let i=0 ; i<fruits.length; i++){  
//     document.write(fruits[i] + "<br/>");  
// }  


// popping out an element

// fruits.pop();
// for (let i=0 ; i<fruits.length; i++){  
//     document.write(fruits[i] + "<br/>");  
// } 


// map method

// const numbers = [11, 12, 13, 14];
// const newArray = numbers.map(x => x * 2);
// document.write(newArray);


// filter method

// const numbers = [11, 12, 13, 14];
// const evens = numbers.filter(x => x % 2 === 0);
// document.write(evens); 


// destructing an Array


// const numbers = [11, 12, 13, 14];
// // const x1 = numbers[0]

// // destructor assignment
// let [x1, x4, x3, x2, x5] = numbers
// x1 = x1 + 3
// document.write( x1 )


// ! Objects


// using literal

// let person = {
//     name: 'Khushi',
//     location : 'Delhi',
//     displayInfo : function(){
//         document.write(`${person.name} lives in  ${person.location}`);
//     }
// }

// // document.write(person.name)
// person.displayInfo(); 


// using constructor
// object in oops
// const person = new Object();
// person.name = 'Khushi';
// person.location = 'Delhi';
// person.displayInfo = function(){
//     document.write(`${person.name} lives in  ${person.location}`);
// }
  
// person.displayInfo();


// Object destructing

// let person = {
//     firstName: 'Khushi',
//     lastName: 'Purwar'
// };

// before ES6


// let f1 = person.firstName;
// let l1 = person.lastName; 

// document.write(f1 + "<br />"); 
// document.write(l1); 


// after ES6

// let {firstName, lastName} = person
// document.write(firstName + "<br />"); 
// document.write(lastName); 



// ! Spread Operator


let arr = ['a','b'];
let arr2 = [arr,'c','d'];
  
console.log(arr2); 


// ! Rest Parameter


// function sum(a, b, c, d, e){
//     return a + b + c + d + e;
// }
// document.write(sum(1, 2)); 
// // document.write(sum(1, 2, 3, 4, 5)); 


// after Es6


// function fun(...input){
//     let sum = 0;
//     for(let i of input){
//         sum = sum + i;
//     }
//     return sum;
// }
// // document.write(fun(1,2)); 
// // document.write(fun(1,2,3)); 
// document.write(fun(1,2,3,4,5));  
