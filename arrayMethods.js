// arr.push(items) - add items to the end
// arr.pop() - extracts an item from the end
// arr.shift() - extracts an item from the beginning.
// arr.unshift(items) - add items to the beginning.


// SPLICE
let arr = ["I", "study", "javascript"];
arr.splice(1,1);
console.log(arr);
console.log(arr.length);


// SEARCHING IN ARRAY

let arr = [1, 0, false];
console.log(arr.indexOf(0));  // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null));  // -1

console.log(arr.includes(1));  //true


