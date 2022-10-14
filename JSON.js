// JSON.stringify

// JSON.stringify to convert object into json
// JSON.parse to convert JSON back into an object


let student = {
    name: "AIN",
    age: 27,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

console.log(typeof json);

console.log(json);





let userData = '{"name": "ain", "age": "27"}';
let user = JSON.parse(userData);
console.log(user.name); //ain


