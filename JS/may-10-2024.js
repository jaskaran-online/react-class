/** 
    📌 Sum array elements
    📌 Count the occurrences of an element
    📌 Find the average of an array
 */

console.log("📌 Sum array elements");

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log({ sum });

// =============================================

console.log("📌 Count the occurrences of an element");
const fruits = ["apple", "banana", "apple", "orange", "apple"];
let count = 0;
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "apple") {
        count++;
    }
}
console.log({ count });

// =============================================

console.log("📌 Find the average of an array");

let sumOfArray = 0;
for (let i = 0; i < numbers.length; i++) {
    sumOfArray += numbers[i];
}
const average = sumOfArray / numbers.length;
console.log({ average }); 
