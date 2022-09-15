//Function Expression---> This allow us to create a new function in the middle of any expression.

// let sayHi = function(){
//     console.log("Hello");
// };
// sayHi();

// Function is a value
// function sayHi(){
//     console.log("Hello");
// }
// console.log(sayHi);



// We can copy function to another variable

// function sayHi(){
//     console.log("Hi");
// }
// let func = sayHi;

// func();
// sayHi();



// function ask(question, yes, no){
//     if(confirm(question)) yes ()
//     else no ();
// }

// function showOk(){
//     console.log("I agreed");
// }

// function showCancel(){
//     console.log("i did not agreed");
// }

// ask("Do you agree?", showOk, showCancel);



// // in other way--same codes

// function ask(question, yes, no){
//     if(confirm(question)) yes()
//     else no();
// }

// ask(
//     "Do you agree?",
//     function(){ alert("You agreed!");},
//     function(){ alert("you cancelled the execution");
//               });



// Function declaration    vs    function expression

//function declaration--> a function declared as a seperate statement in the main code flow;

function sum(a, b){
    return a+b;
}


// function expression---> a function created inside an expression or another syntax construct

let sum = function(a, b){
    return a+b;
}


//NOTE--> a function declaration can be called earlier than it is defined. When javascript prepares to run the script it first look for the global functions declarations in it and create the functions. after function declaration is processed, the code is executed. for ex..

sayHi("John");
function sayHi(name){
    alert(`Hello, ${name}`);
}

//if this was function expression, then it wouldnt work

sayHi("John");
let sayHi = function(name){
    alert(`hello,${name}`);
}; // sayHi is already been declared
