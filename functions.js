//functions are the main building blocks of the program. They allow the code to be called many times without repetition.

function showMessage(){   
    alert("hello Ain");
}
showMessage();  // function is called(can be called multiple times)

function showMessage() {
    alert("Hi Ain");
};
undefined
function showMessage() {
    alert("Hi Ain");
};
showMessage();
undefined
function showMessage() {
    alert("Hi Ain");
};
showMessage();
showMessage();
showMessage();


// Local variables..// local variables---> it is declared inside a function
undefined
function showAlert() {
    let alert = "this is my code";
    alert(alert);
}
showAlert();

function showMessage() {
    let message = "this is my code";
    alert(alert);
}
showMessage();
undefined
function showMessage() {
    let message = "this is my code";
    alert(message);
}
showMessage();
undefined
function showMessage() {
    let message = "this is my code";
    alert(message);
}
showMessage();
alert(mesage);

// outer variables
undefined
// outer variables--> A function that can access outer variable as well
let userName = "Mohd Ain"
function showMessage(){
    let message = "Hello," + userName;
    alert(message);
}
showMessage();
        
undefined
//modified
undefined
let userName = "Bob"
function showMessage(){
    userName = "John";
    let message = "Hello," + userName;
    alert(message);
};
alert(userName); // Bob
showMessage();
alert(userName); // John
undefined

//Parameters

function showMessage(from , text) {
    alert(from + ":" + text);
}
showMessage("Ain", "Hello");  // ain: hello
showMessage("Ain", "What's up"); // ain: what's up

// returning a value

function sum(a , b){
    return a + b;
}
let result = sum(2,4);
alert(result); //3


function checkAge(age){
    if(age >=18){
        return true;
    }
    else{
        return confirm("Do you have permission from your parents?");
    }
}
let age = prompt("How old are you? ", 18);
                 if(checkAge(age)){
                     alert("acccess granted");
                 }
else{
    alert("Access Denied");
    
    };



    function showPrimes(n){
        nextPrime : for(let i = 2; i<n; i++){
            for(let j=2; j<i; j++){
                if(i % j == 0) continue nextPrime;
            }
            alert(i);
        }
    };
    undefined
    function min(a,b){
         return a<b ? a:b;
    }
    undefined
    function min(a,b){
         return a<b ? a:b;
    }
    alert(min);
    undefined
    function min(a,b){
         return a<b ? a:b;
        let result = min(a, b);
    }
    
    alert(result);
    undefined
