/*
 2. User-defined Data Types (Object types)
        1. array
        2. functions
        3. class
        4. Touple
        5. Enum
        6. interface
*/
//----------------------------- 1. array -----------------------------------
/*
array types -both are same output
    1.square bracket Array
    2. ganaric Array
*/
//1. array deactation
var array1 = ['sdfsd', 'sdfsdf', 'fsdfsdf'];
var array2 = ['abc', 'efd', 'ffreen'];
//2. deffrent type arrau
var array3 = [23, 545, 56, 567, 'sfdsd', 'sdf,s', 565];
var array4 = ['sdfsdf', 34, 'dfsdfs', 'sfdsf', 345];
console.log(array3);
console.log(array4);
/*
Two type of array
    1.single dimentional
    2.multi dimentional
*/
var array5 = [43, 54, 565, 67];
var array6 = [[34, 43, 54], [67, 76, 98]];
console.log(array5);
console.log(array6);
//3.Accessing Array Elements
console.log(array5[0]);
console.log(array6[0][0]);
console.log("------- normal loop -----------");
for (var i = 0; i < array1.length; i++) {
    console.log(i);
    console.log(array1[i]);
}
console.log("------ forEach ------------");
array1.forEach(function (element) {
    console.log(element);
});
console.log("---------- for..Of ----------");
for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
    var i = array1_1[_i];
    console.log(i);
}
console.log(" ---------- for..in --------");
for (var i in array1) {
    console.log(i);
    console.log(array1[i]);
}
