/*
callback
- A callback function is a function passed into another function as an argument
*/

//function
function geet(name, callback) {
    console.log('This normal function' + name);
    callback();//callback invoke
}
//callback function
function callMe() {
    console.log("I am a Callback function..!");
}
// passing function as an argument
geet('Peter', callMe);




/*
Benefit of Callback Function
    - wait a data after excetion
    - exxample
*/

//  program that shows the delay in execution
function greet(a) {
    console.log('Hello world' + a);
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000, " My name Thalseeh");// proper way data pass setTimeOut
// setTimeout(greet("My name Thalseeh"), 2000);// bad way not working
sayName('John');



// Callback Function Example
function greet1(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName1(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet1, 4000, ' John', sayName1);



// an other expamle 


//1. normal function example-1
let numbers = [1, 2, 4, 7, 3, 5, 6];

function isOddNumber(number) {
    return number % 2;
}
const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers);

//2. Annonymous function example-2

let oddNumbers1 = numbers.filter(function (number) {
    return number % 2;
});
console.log(oddNumbers1);


//3. Arrow function example-3
let oddNumbers3 = numbers.filter(number => number % 2);
console.log(oddNumbers3);
