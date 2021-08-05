let ann = function (a) {
    return ` this retrun ${a}`;
}
console.log(ann('hi'));




setTimeout(function () {
    console.log('annomies time out');
}, 1000);




// Immediate execution of a function
(function () {
    console.log('<<<<<<<<<< Immediate execution of a function >>>>>>>>>>');
})();


// object inside function of value in javascript

var obj2 = {
    key1: "val1",
    key2: function () {
        return {
            a: "this is a val"
        }
    }
};

console.log(obj2.key2().a)