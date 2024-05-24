let numArray = [1, 2, 2, 3, 4, 4, 5];
let newNumArray = [];
// for (let index = 0; index < numArray.length; index++) {
//     if (!newNumArray.includes(numArray[index])) {
//         newNumArray.push(numArray[index]);
//     }
// }
// console.log(newNumArray)


let firstArray = [1, 2, 3, 4];
let secondArray = [2, 3, 4, 8, 10, 23];
let thirdArray = [];
for (let index = 0; index < firstArray.length; index++) {
    if (secondArray.includes(firstArray[index])) {
        thirdArray.push(firstArray[index])
    }
}
console.log(thirdArray)


// for of
for (const element of numArray) {
    if (!newNumArray.includes(element)) {
        newNumArray.push(element);
    }
}
console.log(newNumArray)


let user = {
    firstName: 'Jaskaran',
    lastName: 'singh'
};

// for in
for (const key in user) {
    // console.log(key + " : " + user[key])
    console.log(`${key} : ${user[key]}`)
}

// for in
// for (const index in numArray) {
//     console.log(index, numArray[index])
// }
