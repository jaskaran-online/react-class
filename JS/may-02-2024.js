/*
 Premitive data types / value types
 
 - String
 - Number
 - Boolean
 - Undefined
 - Null

*/

let name = "Jaskaran";
let age = 28;
let isApproved = false;
let firstName = undefined;
let selectedColor = null;

name = 5;

// console.log(name);
// console.log(name.length)
// console.log(age)

// console.log({
//     'name' : typeof name,
//     'age': typeof age,
//     'isApproved': typeof isApproved,
//     'firstName': typeof firstName,
//     'selecredColor': typeof selectedColor
// });

/*
 Refrence types
 - Object
 - Array
 - Function
*/

let person = {
    firstName: 'Jaskaran',
    age: 28,
    isAdmin: true
};

person.firstName = "singh";

// console.log(person['name'])
console.log(person)


let people = [
    { name: 'Jaskaran', age: 28, isAdmin: true },
    { name: 'Bikram', age: undefined, isAdmin: false }
];

// console.log( people )

let colors = ['red', 'green', 'blue'];

