
class Animal {
    move(data: string) {
        console.log("Animanl" + data);
    }
}

class Dog extends Animal {
    brack() {
        console.log("woof ..!");
    }
}

const dog = new Dog();
dog.brack();
dog.move(" world fatast...?");