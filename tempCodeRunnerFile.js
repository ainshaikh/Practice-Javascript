let user = {name: "ayaan", age: 15};
let admin = {name:"Admin"};

function sayHi() {
    console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();
admin['f']();