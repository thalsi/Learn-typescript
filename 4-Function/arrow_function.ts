let a = 'my name Akhil';


//1.single statement
let arraw = () => 'hello world !';
console.log(arraw());

//2.single statement
let arrow1 = parm => parm + ' softwere enngeer';
console.log(arrow1(a));

let arrow2 = (a, b) => {
    return `hi ${a} seconed ${b}`;
}
console.log(arrow2('ammu', 'ali'));

// 3. Arrow Function as an Expression

let age = 5;

let welcome = (age < 18) ?
    () => console.log('Baby') :
    () => console.log('Adult');

welcome(); // Baby



// 4.Arrow function use object
let person = {
    name: 'Jack',
    age: 25,
    sayName: () => {
        console.log("this.age");
    }
}

person.sayName(); // undefined

