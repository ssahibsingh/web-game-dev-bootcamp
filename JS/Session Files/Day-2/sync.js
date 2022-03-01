// ! setTimeout and setInterval

// setInterval(() => {
//     document.write("Hello");
// }, 3000)

// setTimeout - run a function once after the interval of time.
// setInterval - run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.


// ! callback function

// The benefit of using a callback function is that you can wait for the result 
// of a previous function call and then execute another function call.


// function
// function greet(name, demo) {
//     console.log('Hi' + ' ' + name);
    
//     demo();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Khushi', callMe);

// *  -------------------------------------------------

// ? program that shows the delay in execution


// function greet() {
//     console.log('Hello world');
//     // another function(){
//              // another function2(){
//                 //  
//             //  }
//     // }
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// setTimeout(greet, 7000);
// sayName('Khushi');

//  * -----------------------------------------------------------------

//example: data coming from a server as it takes time for data to arrive.

// ! Promise 

//? A promise object has a state that can be one of the following:

// Pending
// Fulfilled with a value
// Rejected for a reason

// For example, when we request data from the server by using a Promise, it will be in pending mode until we receive our data.
// If we achieve to get the information from the server, the Promise will be resolved successfully. But if we don’t get the information, then the Promise will be in the rejected state.
// Additionally, if there are multiple requests, then after the first Promise is resolved (or rejected), a new process will start to which we can attach it directly by a method called chaining.

// *example

// ? syntax: new Promise(function (resolve, reject) { ... } );


// var isMomHappy = true;

// // Promise
// var willIGetNewPhone = new Promise( function (resolve, reject) {
//             if (isMomHappy) {
//                 var phone = {
//                     brand: 'Samsung',
//                     color: 'black'
//                 };
//                 resolve(phone); // fulfilled
//             } else {
//                 var reason = "mom is not happy"
//                 reject(reason); // reject
//             }

//     }
// );
// console.log(willIGetNewPhone);



// // call our promise
// var askMom = function () {
//     willIGetNewPhone
//         .then(function (fulfilled) {
//             console.log(fulfilled);

//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// };

// askMom();

// * --------------------------------------------------------------------

// ! Async and Await 
// makes the promise easier to write


function test2 (){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
  
        resolve( console.log("we are in test2 function") )
  
      },3000)
    })
  }

async function test1(){

    console.log("A")
    console.log("B")
    console.log("C")
    
    await test2()
    
    console.log("D")
    console.log("E")
  
  }
  
//   // Trigger the function
  
test1();

console.log("first statement")
console.log("second statement")
console.log("third statement")

// * -------------------------------------------------------------
