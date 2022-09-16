let sum = (a, b)=> a+b;
console.log(sum(1,2));  //3

// if we have only one arguments then parentheses can be omitted...

let double = n => n*2;
console.log(double(3));


// when no arguments

let sayHi = () => 
console.log("Hello");
sayHi();





function ask(question, yes, no){
if (confirm(question)) yes();
else no();
}
ask(
    "Do you agree?",
() => console.log("you agreed"),
() => console.log("cancelled")


);