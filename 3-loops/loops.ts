/*
1. while loop
2. do while loop
3. for
4. for..of
5. for..in
6. brack / contion
*/
let i = 0;

//1. while loop
while (i < 5) {
    console.log(i);
    i++;
}



//2.do while loop
let ii = 0
do {
    console.log('do while -->' + ii);
    ii++;
} while (ii < 5);


let userLoop = [
    { rollNo: 1001, name: 'ali' },
    { rollNo: 1002, name: 'Lijo' },
    { rollNo: 1003, name: 'Shamer' },
    { rollNo: 1004, name: 'Shamon' },
    { rollNo: 1005, name: 'Kuttu' }
];

let userLoop1 = ["ali muthu ck", "Arshad", "Kuttan", "Mahin"];
let userLoop2 = "Thalseeh C M";



//3. for
console.log("--------for -------------");

for (let i = 0; i < userLoop.length; i++) {
    console.log(i);//index
    console.log(userLoop[i]);//print element 
    console.log(userLoop[i].name);//print element value
}


// 4. for..of
console.log("-------- for..of -----------");
for (let i of userLoop) {
    console.log(i);//index
    console.log(i.name);//element
}

console.log('for..of index print');
for (const { i, value } of userLoop.map((i, value) => ({ i, value }))) {
    console.log(i);//for..of index
    console.log(value);//element
}


// 5.for..In
console.log("------ for..in --------");
for (let i in userLoop) {
    console.log(i);
    console.log(userLoop[i]);
    console.log(userLoop[i].name);
}

//6.forEach()
console.log("------ for Each -------");

userLoop.forEach((value, index) => {
    console.log(value);
    console.log(index);
})