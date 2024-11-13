// Simple Function
function fun() {
    console.log("Hello World");
}

// Arrow Function
const funArrow = () => {
    console.log("Hello World");
}

// Function with Parameter
function fun2(param) {
    console.log(param);
}

// Arrow Function with Parameter
const funArrow2 = (param) => {
    console.log(param);
}

const funArrowSingle = param => {
    console.log(param);
}

// Arrow Function without return
const funArrowWithoutReturnAndParentheses = param => console.log(param);

// Function with Multiple Parameter
function fun3(param, param2) {
    console.log(param + param2);
}

// Arrow Function with Multiple Parameter
const funArrow3 = (param, param2) => {
    console.log(param + param2);
}

// Function with Return
function fun4(params) {
    return params + "Hello";
}

// Arrow Function with Return
const funArrow4 = (params) => {
    return params + "Hello";
}

// Arrow function without return keyword
const funArrowWithoutReturnKeyword = (params) => params + "Hello";

// Function with Multiple Parameter
function fun5(...params) {
    console.log(params);
}
// Arrow Function with Multiple Parameter
const funArrow5 = (...params) => {
    console.log(params);
}
funArrow5(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
