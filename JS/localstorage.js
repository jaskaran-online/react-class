/** 
 localStorage
    - setItem // insert data into localStorage using key and value
    - getItem // get data from localStorage using key
 */

localStorage.setItem('name', 'Jaskaran');
localStorage.setItem('age', '28');

let name = localStorage.getItem('name')


let jaskaranObject = {
    name: 'Jaskaran',
    age: 28
}

console.log(typeof name, name);
console.log(typeof jaskaranObject, jaskaranObject);

/**
    JSON.stringify
        - convert object to string
    JSON.parse
        - convert string to object
 */

let jaskaranString = JSON.stringify(jaskaranObject);
console.log(typeof jaskaranString, jaskaranString);

localStorage.setItem('jaskaran', jaskaranString);

let dataFromLS = localStorage.getItem('jaskaran')

console.log("Getting jaskaran from localStorage", dataFromLS);

console.log(typeof dataFromLS);

let objectStringToObj = JSON.parse(dataFromLS);
console.log(objectStringToObj);

console.log(objectStringToObj.age);
