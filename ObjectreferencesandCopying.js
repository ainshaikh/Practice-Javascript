// objects are stored and copied by references(address)....... whereas primitive(string, numbers, booleans, etc..) values are always copied as a whole value.

//ex....

let message = "Hello!";
let phrase = message;
console.log(message); // hello!
console.log(phrase); // hello!

// a variable assigned to an object stores references too

let user = {
    name: "Ain"
}; 
console.log(user.name);
// when we perform actions with object like user.name, javascript engine looks at whats at that address and perform operation on the actual object.

//comparison by references.......
// here a and b reference the same object, thus they are equal

let a = {};
let b = a;
console.log(a == b); //true
console.log(a == b);  //true

// here two independent objects are not equal even though they look alike

let a = {};
let b = {};
console.log(a == b); // false

//NOTE-- const object can be modified.....side effect of storing as a reference

const user = {
    name: "ain"
};
user.name = "peter";
console.log(user.name);

// Cloning and Merging

let user = {
    name: "AIN"
};

let clone = {};
// copy all user properties into it
for(let key in user){
    clone[key]=user[key];
}
clone.name = "peter"
console.log(user.name); // ain
console.log(clone.name); // peter


// Object.assign----> Syntax
// Object.assign(dest, src1[, src2, src3...])
// dest---is a target object

let user = {name: "Imagine"};

let permission1 = {canView: true};
let permission2 = {canView: true};

Object.assign(user, permission1, permission2);
console.log(user.assign);


// Nested cloning

let user = {
    name: "Ain",
    sizes: {
        height: 173,
        weight: 62
    }
};
console.log(user.sizes.height);  // 182

let user = {
    name: "AIN",
    sizes: {
        height: 173,
        width: 700000
    }
};
let clone = Object.assign({}, user);  // cloning user into clone
console.log(user.sizes === clone.sizes);
user.sizes.width = 60;
console.log(clone.sizes.width);
console.log(user.sizes.width);  // clone and user will share the same sizes because user.sizes is an object and will be copied by reference.....


//  To fix above and make user and clone truly seperate object-----> we use a cloning loop that is deep cloning or structured cloning

let user = {
    name: "Ain Shaikh",
    sizes:{
        height: 23321,
        width: 656
    }
};

let clone = structuredClone(user);
console.log(user.sizes === clone.sizes);  //false now different objects
user.sizes.width = 60;
console.log(clone.sizes.width); 
 // function property in structred clone is not supported..




