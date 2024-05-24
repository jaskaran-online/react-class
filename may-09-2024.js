// Different Kinds of Loops
/*
JavaScript supports different kinds of loops:

📌 for - loops through a block of code a number of times
📌 for/of - loops through the values of an iterable object
📌 for/in - loops through the properties of an object
📌 while - loops through a block of code while a specified condition is true
📌 do /while - also loops through a block of code while a specified condition is true

*/

let students = ['Rupinder', 'Amandeep', 'Harsimran', 'Jaskaran'];

// console.log(students)


// Experession 1
for (let index = 0; index < students.length; index++) {
    const element = students[index];
    console.log(
        index,
        element
    )
}


// Example without first experession
let index = 2;
for (; index < students.length; index++) {
    // console.log(index, students[index]);
}

//Expression 2

// Example without expression 2 in a for loop
for (let index = 0; ; index++) {
    // console.log(index);
    if (index >= 2) {
        // Without this break, the loop would continue indefinitely
        break;
    }
}

// Expression 3
// Example without expression 3 in a for loop

for (let index = 0; index < students.length;) {
    // console.log(index);
    if (index == 3) {
        // Without this break, the loop would continue indefinitely
        break;
    }
    console.log(students[index])
    index++;
}