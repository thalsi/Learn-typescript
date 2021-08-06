
//class
class Person {
    //porparties
    name = "Ali mone";

    //methords
    walk() {
        console.log(' I waking...');
    }
}

//instantiate
let person = new Person();
person.name;//access proparty
person.walk();//access Methord




class PersonData {
    //Propartyes
    FastName = "";
    lastName = "";

    //constructor methords
    constructor(Fn: string, Ls: string) {
        this.FastName = Fn;
        this.lastName = Ls;
    }

    //methrods
    values() {
        console.log(this.FastName);
        console.log(this.lastName);
    }
}

let personData = new PersonData('Aju', 'Antonny');
personData.FastName;//access proparty
personData.values();//access methords
console.log(personData.FastName);
console.log(personData.values());
