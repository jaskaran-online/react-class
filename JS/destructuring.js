// Destructuring
// Defination: The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Array Destructuring
const arr = [1, 2, 3, 4, 5];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];
// let e = arr[4];

const [a, , , d, e] = arr;

console.log(a, d, e);

// Object Destructuring
const obj = { name: "John", age: 20, city: "New York", state: "NY" };

// const name = obj.name;
// const age = obj.age;
// const city = obj.city;

// console.log(name, age, city);


const { name, age, city, state } = obj;

console.log(name, age, city, state);