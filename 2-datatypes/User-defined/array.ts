
//----------------------------- 1. array -----------------------------------

/*
array types -both are same output 
    1.square bracket Array
    2. ganaric Array
*/

/*

 
  3.  Array
      - Two ways to declare an Array
        1.  square barcket -let arr:string[]
        2.  genaric Array -let arr: Array<string>
      - Two datatype Array
        1.  single type
            - let a:string[] | let a:Array<string>
        2.  multiple type
            - let a:(string|number) | let a:Array<string|number>
      - Two type of Array
        1.  signle dimention
            - let a:string[]
        2.  multiple dimention
            - let a:string[][]
      - Accessing Array Elements
        1.  using the index [0]
        2.  regular for loop
        3.  for..of
        4.  forEach()
        5.  for..in
            - dot use this. iterate an array because that iterates all enumerable properties
      - Methords
        1.  Array.length
        2.  Array.push('')
            - array End postion element add.
        3.  Array.pop()
            - array End paostion element remove.
        4.  Array.shift()
            - remove element frond in array
        5.  Array.unshift('')
            - add element in frond in array
        6.  Array.splice(pos,item)
            - index postion reomve element
        7.  Array.slice()
            - copy an array
        8.  Array.at() - NOT USE TYPESCPIT
            - at(postiveIndex) - frond strat element display
            - at(nacativeIndex) - End strat element dispaly
        9.  Array.concat()
        - retrun new array join

*/

//1. array deactation
let array1: string[] = ['a', 'b', 'c'];
let array2: Array<string> = ['aaa', 'bbb', 'ccc'];

//2. deffrent type arrau
let array3: (string | number)[] = [23, 545, 56, 567, 'a', 'b,c', 565];
let array4: Array<string | number> = ['a', 34, 'b', 'c', 345];
console.log(array3);
console.log(array4);

/*
Two type of array 
    1.single dimentional 
    2.multi dimentional
*/

let array5: number[] = [43, 54, 565, 67];
let array6: number[][] = [[34, 43, 54], [67, 76, 98]];
console.log(array5);
console.log(array6);

//3.Accessing Array Elements
console.log(array5[0]);
console.log(array6[0][0]);

console.log("------- normal loop -----------");
for (let i = 0; i < array1.length; i++) {
    console.log(i);
    console.log(array1[i]);
}

console.log("------ forEach ------------");
array1.forEach(element => {
    console.log(element)
});

console.log("---------- for..Of ----------");
for (let i of array1) {
    console.log(i);
}

console.log(" ---------- for..in --------");
for (let i in array1) {
    console.log(i);
    console.log(array1[i]);
}


//------------- Array Methords ---------------------

//1. length() 
console.log(array1.length);

//2. push();
array1.push('thasl');
console.log('push-->' + array1);

//3.pop()
array1.pop()
console.log('pop-->' + array1);

//4.shift()
array1.shift()
console.log('shift-->' + array1);

//5.unshift()
array1.unshift('hi');
array1.unshift('5hi3');
array1.unshift('4hi4');
console.log('unshift-->' + array1);

//6.splice(pos,item)
array1.splice(1, 2);
console.log('splice-->' + array1);

//7.slice()
let copy = array1.slice();
console.log('slice-->' + copy);

//8.at()
// console.log(array1.flat(1));
// console.log(array1.flat(-1));


//9.concat()
let a11: string[] = ['e', 'we'];
let a22: string[] = ['dsf', 'xgd'];
let a33: string[] = a11.concat(a22);
console.log('concat --->' + a33);

//10.copyWithin()
// let arra: string[] = ['a', 'b', 'c', 'd', 'e'];
// console.log(arra);
// console.log(arra.copyWithin(0, 3, 6));






