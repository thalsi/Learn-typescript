// ====================== 3. Data Typea =========================
/*
    1. Built-in Datatypes (Primitive types)
        1. number
        2. string
        3. boolean
        4. null
        5. undefind
        6. symbol
    2. User-defined Data Types (Object types)
        1. array
        2. functions
        3. class
        4. Touple
        5. Enum 
        6. interface
*/


//---------------------- 1. number ----------------------------------------
var num: number = 3445;
console.log('print =' + num);
console.log('type of ' + typeof num);

//1. toString()
console.log('convert to string--->' + num.toString());
console.log('convert to string typeof-->' + typeof num.toString());
console.log('convert to string typeof-->' + typeof (3 + 5).toString());

//2 .toFixed()
const num1 = 4.3443;
console.log(num1);
console.log('toFixed -->' + num1.toFixed(0));
console.log('toFixed -->' + num1.toFixed(2));

//3. toPrecision()
const num2 = 300.4353;
console.log(num1);

console.log('toPrecision -->' + num2.toPrecision(1));
console.log('toPrecision -->' + typeof num2.toPrecision(2));
console.log('toPrecision -->' + num2.toPrecision(4));


//4. valueOf()
const num3 = 67;
console.log(num3);
console.log('valueOf -->' + num3.valueOf());

//5.Number()
console.log('number convert boolean -->' + Number(true));
console.log('number convert boolean -->' + Number(false));
console.log('number convert "10" -->' + Number("10"));
console.log('number convert "10.45" -->' + Number("10.45"));
console.log('number convert "10,20" -->' + Number("10,20"));
console.log('number convert string -->' + Number('thalseeh'));


//6.parseInt()

console.log('parseInt "10" -->' + parseInt("10"));
console.log('parseInt "10.34345" -->' + parseInt("10.34345")); //compare parseInt vs parseFloat
console.log('parseInt "10,20,30" -->' + parseInt("10,20,30"));
console.log('parseInt "10 thalsee" -->' + parseInt("10 thalseeh"));
console.log('parseInt "thalsee 10" -->' + parseInt("thalsee 10"));

//6.parseFloat()

console.log('parseFloat "10" -->' + parseFloat("10"));
console.log('parseFloat "10.34345" -->' + parseFloat("10.34345")); //compare parseInt vs parseFloat
console.log('parseFloat "10,20,30" -->' + parseFloat("10,20,30"));
console.log('parseFloat "10 thalsee" -->' + parseFloat("10 thalseeh"));
console.log('parseFloat "thalsee 10" -->' + parseFloat("thalsee 10"));




//---------------------- 1. string ----------------------------------------
let google = "Java and Javascript are not same !";
let google2 = "Ja va, and, Javascript, are, not, same !";

// 1. string.indexOf(substr, [start])
console.log("google.indexOf('a') -->" + google.indexOf('a'));
console.log(".indexOf start with 34 google.indexOf('a',34) -->" + google.indexOf('a', 34));//start with 34
console.log("indexOf indexOf -->" + google.indexOf('and'));
console.log("indexOf indexOf -->" + google.indexOf('java'));//not fount case sencetive

//2. string.lastIndexOf(substr, [end])
console.log("indexOf('a') -->" + google.lastIndexOf('e'));
console.log("indexOf('a') -->" + google.lastIndexOf('e', 34));

//3. string.replace(originalstr,newstr) 
console.log("replace('Java','angualr') -->" + google.replace('Java', 'Angualr'));
console.log("gobal repaces -replace(/Java/g,'angualr') -->" + google.replace(/Java/g, 'Angualr'));//gobal serach repalces
console.log("gobal repaces -replace(/Java/,'angualr') -->" + google.replace(/Java/, 'Angualr'));//  non gobal

//4. string.slice(start,[end])
console.log(google.length);

console.log("start and end slice(2,10) -->" + google.slice(2, 10));
console.log("startend slice(-4) -->" + google.slice(-4));
console.log("startend slice(-5,-6) -->" + google.slice(-6, -2));
console.log("start slice(4) -->" + google.slice(4));

//5. string. split() 
console.log("split(',') -->" + google2.split(','));
console.log("split('') -->" + google2.split(''));
console.log("split(' ') -->" + google2.split(' '));

//6.string.trim()
let google3 = "   javaScrpit and new lrean !     ";
console.log("trim() -->" + google3.trim());

//7.string.trimStart()
let google4 = "      hi        ";
// console.log("trimStart() --->" + google4.trimStart());

//8.string.trimEnd()
let google5 = "      hi        ";
// console.log("trimEnd() -->" + google5.trimEnd());

//9.string.charAt(x)
console.log("charAt(3) -->" + google3.charAt(3));

//10. string.concat()
let concatStr = 'abc';
console.log("concat(str, str1) -->" + concatStr.concat('WEEW', '......'));

//11.string.includes()
console.log("includes('Java') -->" + google.includes('Java'));

//12.toLowerCase
console.log("toLowerCase-->" + google.toLowerCase());

//13.toUpperCase
console.log("toUpperCase-->" + google.toUpperCase());

//14. EndsWith(searchString[, length]) 
console.log("toUpperCase-->" + google.endsWith("same"));
console.log("toUpperCase-->" + google.endsWith("a", 5));




