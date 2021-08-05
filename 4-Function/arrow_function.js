var a = 'my name Akhil';
//1.single statement
var arraw = function () { return 'hello world !'; };
console.log(arraw());
//2.single statement
var arrow1 = function (parm) { return parm + ' softwere enngeer'; };
console.log(arrow1(a));
var arrow2 = function (a, b) {
    return "hi " + a + " seconed " + b;
};
console.log(arrow2('ammu', 'ali'));
// 3. Arrow Function as an Expression
var age = 5;
var welcome = (age < 18) ?
    function () { return console.log('Baby'); } :
    function () { return console.log('Adult'); };
welcome(); // Baby
// 4.Arrow function use object
var person = {
    name: 'Jack',
    age: 25,
    sayName: function () {
        console.log("this.age");
    }
};
person.sayName(); // undefined
var obj2 = {
    key1: "val1",
    key2: function () {
        return {
            a: "this is a val"
        };
    }
};
console.log(obj2.key2().a);
