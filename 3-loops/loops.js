/*
1. while loop
2. do while loop
3. for
4. for..of
5. for..in
6. brack / contion
*/
var i = 0;
//1. while loop
while (i < 5) {
    console.log(i);
    i++;
}
//2.do while loop
var ii = 0;
do {
    console.log('do while -->' + ii);
    ii++;
} while (ii < 5);
var userLoop = [
    { rollNo: 1001, name: 'ali' },
    { rollNo: 1002, name: 'Lijo' },
    { rollNo: 1003, name: 'Shamer' },
    { rollNo: 1004, name: 'Shamon' },
    { rollNo: 1005, name: 'Kuttu' }
];
var userLoop1 = ["ali muthu ck", "Arshad", "Kuttan", "Mahin"];
var userLoop2 = "Thalseeh C M";
//3. for
console.log("--------for -------------");
for (var i_1 = 0; i_1 < userLoop.length; i_1++) {
    console.log(i_1); //index
    console.log(userLoop[i_1]); //print element 
    console.log(userLoop[i_1].name); //print element value
}
// 4. for..of
console.log("-------- for..of -----------");
for (var _i = 0, userLoop_1 = userLoop; _i < userLoop_1.length; _i++) {
    var i_2 = userLoop_1[_i];
    console.log(i_2); //index
    console.log(i_2.name); //element
}
console.log('for..of index print');
for (var _a = 0, _b = userLoop.map(function (i, value) { return ({ i: i, value: value }); }); _a < _b.length; _a++) {
    var _c = _b[_a], i_3 = _c.i, value = _c.value;
    console.log(i_3); //for..of index
    console.log(value); //element
}
// 5.for..In
console.log("------ for..in --------");
for (var i_4 in userLoop) {
    console.log(i_4);
    console.log(userLoop[i_4]);
    console.log(userLoop[i_4].name);
}
//6.forEach()
console.log("------ for Each -------");
userLoop.forEach(function (value, index) {
    console.log(value);
    console.log(index);
});
