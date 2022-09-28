// a function that is a property of an object is called its method.

let user = {
    name:"ain",
    age: 30
};

user.sayHi = function(){
    console.log("hello");
}
user.sayHi();

//this in method
// to access the object, a method can use this keyword.

let user = {
    name: "ainn",
    age:3231,
    sayHi(){
        console.log(this.age);
    }
};

user.sayHi();



// if we copy user to another variable and overwrite user with smthng else, then it will access the wrong object

let user = {
    name: "Afngr",
    age: 98,

    sayHi(){
        console.log(user.name);
    }
};

let admin = user;
user = null;
admin.sayHi(); // typeerror-- cannot read properties of null

// if we used this instead of user code will work

let user = {
    name: "Afngr",
    age: 98,

    sayHi(){
        console.log(this.name);
    }
};

let admin = user;
user = null;
admin.sayHi();


// this is not bound----> can be used in any function even if its not a method of an object.
// value of this is evaluated during the run time, depending on context.


let user = {name: "ayaan", age: 15};
let admin = {name:"Admin"};

function sayHi() {
    console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();
admin['f'](); // dot or square brackets access the method


// Note---arrow function do not have this


