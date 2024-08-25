const arrWithNumbers = [1, 2, 3, 4, 5];
const arrOfObjects = [
    { name: "John", age: 20 },
    { name: "Jane", age: 21 },
    { name: "Jim", age: 22 }
];

// forEach
// Defination: The forEach() method executes a function for each array element.
console.log("----forEach----");
console.log("arrWithNumbers");

arrWithNumbers.forEach(element => {
    console.log(element);
});

console.log("arrOfObjects");
arrOfObjects.forEach((element, index) => {
    console.log(element.name, index, element.age);
});

// map
// Defination: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log("----map----");
console.log("arrWithNumbers");
const arrWithNumbers2 = arrWithNumbers.map(element => element * 2);
console.log(arrWithNumbers2);

console.log("arrOfObjects");
const arrOfObjects2 = arrOfObjects.map(element => element.name + " " + element.age);
console.log(arrOfObjects2);

// some
// Defination: The some() method tests whether at least one element in the array passes the test implemented by the provided function.
console.log("----some----");
console.log("arrWithNumbers");
const isSome = arrWithNumbers.some(element => element > 3);
console.log(isSome);

console.log("arrOfObjects");
const isSomeObject = arrOfObjects.some(element => element.age > 20);
console.log(isSomeObject);

// find
// Defination: The find() method returns the first element in the provided array that satisfies the provided testing function.
console.log("----find----");
console.log("arrWithNumbers");
const find = arrWithNumbers.find(element => element > 3);
console.log(find);

console.log("arrOfObjects");
const findObject = arrOfObjects.find(element => element.name === "Jane");
console.log(findObject);

// filter
// Defination: The filter() method creates a new array with all elements that pass the test implemented by the provided function.
console.log("----filter----");
console.log("arrWithNumbers");
const filter = arrWithNumbers.filter(element => element > 3);
console.log(filter);

const filterObject = arrOfObjects.filter(element => element.age > 20);
console.log(filterObject);

// findIndex
// Defination: The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
console.log("----findIndex----");
console.log("arrWithNumbers");
const findIndex = arrWithNumbers.findIndex(element => element > 3);
console.log(findIndex);

console.log("arrOfObjects");
const findIndexObject = arrOfObjects.findIndex(element => element.name === "Jane");
console.log(findIndexObject);

// every
// Defination: The every() method tests whether all elements in the array pass the test implemented by the provided function.
console.log("----every----");
console.log("arrWithNumbers");
const isEvery = arrWithNumbers.every(element => element > 0);
console.log(isEvery);

// reduce
// Defination: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
console.log("----reduce----");
console.log("arrWithNumbers");
const reduce = arrWithNumbers.reduce((acc, element) => acc + element, 0);
console.log(reduce);

console.log("arrOfObjects");
const reduceObject = arrOfObjects.reduce((acc, element) => acc + element.age, 0);
console.log(reduceObject);