// let user = new Object();  // object constructor

// let user = {}; // literals constructor

let user = {
    name: "Ain",
    age: 26,
    "I like myself":true

};
user["i dont know"] = false;
console.log(user["i dont know"]);


console.log(user["I like myself"]);  // square bracket notation works with any string.

console.log(user.name);
console.log(user.age);

user.isAdmin = true;

console.log(user.isAdmin);

// delete

delete user.age;
console.log(user.age); // undefined



let key = prompt("What do you want to know about user", "name" , "age");
console.log(user[key]);


// computed properties

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
    [fruit]: 5,
};
console.log(bag.apple);


// property value shorthand

function makeUser(name, age){
    return{
        name: name,
        age: age,
    };
}
let user = makeUser("Ain", 110);
console.log(user.name);


function makeUser(name, age){
    return{
        name,
        age,
    };
}
let user = makeUser("Ainn", 1100);
console.log(user.name);
console.log(user.age);


// no property names limitations for object property

let obj = {
    for: 1,
    let: 2,
    var: 3,
    const:5,
};
console.log(obj.for+obj.let+obj.var+obj.const);  // 11

// NOTE---> we cant set it to non object value __proto__

let obj = {};
obj.__proto__=5;
console.log(obj.__proto__);  // [Object: null prototype] {}


// SPECIAL OPERATOR "in"

let object = {
    name: "Mohd Ain",
    age: 26,
};
console.log("age" in object);  //true
console.log("name" in object); //true
console.log("blabala" in object);// false
console.log("26" in object); // false


// "for..in" loop

let user = {
    name: "AIN",
    age: 26,
    isAdmin : false,
};
 for(let key in user){
    console.log(key);  // name age isAdmin
    console.log(user[key]);  // AIN 26 false
 }



 // ordered like an object

 let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "91": "India",
    "1": "USA",
 };
 for(let key in codes){
    console.log(key);
 }




