function sumOfArray() {
    console.log('📌 Sum of Array');
}
sumOfArray();

// const sumOfArray = () => {
//     console.log('📌 Sum of Array');
// }

// function show(x) {
//     return `hello ${x}`
// }

// const show = (x) => {
//     return `hello ${x}`
// }

// const show = (x, y) => `hello ${x + y}`

const num = ['sadsd', 2, 54, 12, 5, 76, 'qweq']

function showMessage(message, message2 = 'default value') {
    console.log('📌 Show Message', message + " " + message2);
}

showMessage('Hello World');


function multipleParams(parameter1, parameter2) {
    return parameter1 * parameter2;
}

let result = multipleParams(10, 2)
console.log(result);
document.write(result)



function simpleFunction(callbackFunction) {
    let simpleFunctionVar = "jaskaran";
    console.log('Simple')
    callbackFunction(simpleFunctionVar);
}


function testFunction(name) { // callback
    console.log('Test function ', name)
}

simpleFunction(testFunction)