
// Variable declaration
var firstName;
var FirstName = "Jaskaran"
let lastName; // undfined
const fullName = "jaskaran singh";

// Variable initialization
firstName = "Jaskaran";

// Avoid using reserved keywords as variable names (e.g., 'int', 'for', 'class')
// Variable names should not start with a number (e.g., '1name', '2name')
// Avoid using numbers at the beginning of variable names (e.g., 'count1', 'value2')
// Do not include spaces or hyphens in variable names (e.g., 'userAge', 'totalAmount')
// Variables are case-sensitive (e.g., 'myVar' is different from 'MyVar')
// Choose meaningful and descriptive variable names (e.g., 'firstName', 'totalSales')

let x = 'jaskaran';
let y = 'singh';


var counter = 0;

// user + btn click counter + 1


function test(){
    if(true){
        var a = 10;
    }
    a = 20;
    console.log(a);
}
// test();

function testLet() {
    if (true) {
        let a = 10;
        a = 40;
        console.log(a)
    }
    console.log(a);
}
// testLet();


function testConst() {
    if (true) {
        const a = 10;
        a = 30;
        console.log(a)
    }
    console.log(a);
}
testConst();
