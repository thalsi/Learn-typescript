//class
var Person = /** @class */ (function () {
    function Person() {
        //porparties
        this.name = "Ali mone";
    }
    //methords
    Person.prototype.walk = function () {
        console.log(' I waking...');
    };
    return Person;
}());
//instantiate
var person = new Person();
person.name; //access proparty
person.walk(); //access Methord
var PersonData = /** @class */ (function () {
    //methords
    function PersonData(Fn, Ls) {
        //Propartyes
        this.FastName = "";
        this.lastName = "";
        this.FastName = Fn;
        this.lastName = Ls;
    }
    //methrods
    PersonData.prototype.values = function () {
        console.log(this.FastName);
        console.log(this.lastName);
    };
    return PersonData;
}());
var personData = new PersonData('Aju', 'Antonny');
personData.FastName; //access proparty
personData.values(); //access methords
console.log(personData.FastName);
console.log(personData.values());
