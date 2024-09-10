// Explore the includes, starts With & ends with functions of a String

let str = "Hello world";

console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("world")); // true
console.log(str.includes("Hello")); // true

console.log(str.startsWith("world")); //false
console.log(str.endsWith("Hello")); //false
console.log(str.includes("end"));  //false