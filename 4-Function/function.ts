
//1. function 
function myFunction() {
    console.log('my function');
}
myFunction();




//2.parmeter function
function myFun(a, b) {
    console.log(` a=${a} b=${b}`);
}
myFun(34, 54)





//3.retrun function
function myRutrun() {
    return 'hi'
};
console.log(myRutrun());






/*
Method Overloading
- same name but different parameter types and return type.
*/

function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
    return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve" 
add(10, 20); // returns 30 





/*
Method Overriding
- Method Overriding is a concept of Inheritance in Classes where a child class can override a function of a parent class. In this, child class may or may not use the logic of a function defined in parent class.
- We use super keyword to refer to the functions or fields of the immediate parent class.
*/

class ParentClass {
    display(): void {
        console.log("Display method from Parent Class!")
    }
}

class ChildClass extends ParentClass {
    display(): void {
        super.display()
        console.log("dislay method from Child Class!")
    }
    hello(): void {
        console.log("Hello from Child Class!");
    }
}

var parentObj = new ParentClass();
parentObj.display();
var childObj = new ChildClass();
childObj.display();
childObj.hello();

