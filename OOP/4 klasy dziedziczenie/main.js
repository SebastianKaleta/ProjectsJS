class Animal {
    constructor(age,name) {
        this.age = age;
        this.name=name;
    }
    breathe() {
        console.log("Zwierze oddycha");
    }
}

const zwierze = new Animal(2,'Artek');

class Mammal extends Animal{
    constructor(age,name,hairs){
        super(age,name)
        this.hairs=hairs;
    }
drinkMilk(){
    console.log("Ssaki piją mleko")
}
speak(){
    console.log("kafhaks jabsf")
}
}

const ssak = new Mammal(3, 'Maks','blond')

ssak.breathe();
ssak.drinkMilk();

class Human extends Mammal{
    constructor(age,name,hairs,language){
        super(age,name,hairs)
        this.language=language;
    }
    speak(){
        console.log("Człowiek mówi")
    }
}

const czlowiek = new Human(34, "Roman","ciemne", "polski")