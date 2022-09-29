// constructor ---"New"

function User(name){
    this.name = name;
    this.isAdmin = false;
}
let user = new User("Ain");  //constructor   --- named with capital letter first and should be executed with new word

console.log(user.name);
console.log(user.isAdmin);


function User(){
    console.log(new.target);  // to check if call was from new or without new
}
User(); // undefined
new User(); // [function[:user]

