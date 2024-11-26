class Animal {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    } 
    speak() {
        return `${this.name} makes a sound`;
    }
    walk() {
        return 'walking in the park';
    }
}

class Cat extends Animal {
    constructor(name, age, hairballs) {
        super(name,age);
        this.hairballs = hairballs;
    }
    speak() {
        return `${this.name} says meow`;
    }
}

const cat = new Cat('Fluffy', 5,10);
console.log(cat);