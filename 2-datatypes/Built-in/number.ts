

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





