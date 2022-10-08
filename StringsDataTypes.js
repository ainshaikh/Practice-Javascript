alert(`My\n`.length);
undefined
alert(`ainnnn`.length(;
VM438:1 Uncaught SyntaxError: Unexpected token ';'
alert(`mynameisain`.length);
undefined
// strings are immutable
undefined
let str = 'hi';
str[0] = 'H';
alert(str[0]);
undefined
let str = 'Hi';
str = 'h' + str[1];
alert(str);
undefined

// changing the case

console.log("ain".toUpperCase()); // AIN

console.log("AIN".toLowerCase()); // ain

//substrings
let str = "My name is AIN";
console.log(str.indexOf('name'));