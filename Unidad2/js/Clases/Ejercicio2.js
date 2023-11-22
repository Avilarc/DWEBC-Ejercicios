class Animal {
    constructor(group, name, age, wayOfMoving, habitat, hasTail) {
        this.group = group;
        this.name = name;
        this.age = age;
        this.wayOfMoving = wayOfMoving;
        this.habitat = habitat;
        this.hasTail = hasTail;
        this.isAwake = false;
    }

    sleep() {
        if (this.isAwake) {
            console.log(`${this.name} is now sleeping.`);
            this.isAwake = false;
        } else {
            console.log(`${this.name} is already asleep.`);
        }
    }

    awake() {
        if (!this.isAwake) {
            console.log(`${this.name} is now awake.`);
            this.isAwake = true;
        } else {
            console.log(`${this.name} is already awake.`);
        }
    }

    move() {
        if (this.isAwake) {
            console.log(`${this.name} is now moving.`);
        } else {
            console.log(`${this.name} cannot move while asleep.`);
        }
    }

    stop() {
        console.log(`${this.name} has stopped.`);
    }
}

class Mammal extends Animal {
    constructor(name, age, wayOfMoving, habitat, hasTail, numberOfPaws) {
        super('Mammal', name, age, wayOfMoving, habitat, hasTail);
        this.numberOfPaws = numberOfPaws;
    }
}

class Reptile extends Animal {
    constructor(name, age, wayOfMoving, habitat, hasTail) {
        super('Reptile', name, age, wayOfMoving, habitat, hasTail);
    }
}

class Fish extends Animal {
    constructor(name, age, wayOfMoving, habitat, hasTail, numberOfFins) {
        super('Fish', name, age, wayOfMoving, habitat, hasTail);
        this.numberOfFins = numberOfFins;
    }
}

// Example Usage
const myCat = new Mammal('Fluffy', 3, 'Walking', 'Domestic', true, 4);
myCat.awake();
myCat.move();
myCat.stop();
myCat.sleep();

const mySnake = new Reptile('Slithery', 5, 'Slithering', 'Jungle', true);
mySnake.awake();
mySnake.move();
mySnake.stop();
mySnake.sleep();

const myShark = new Fish('Sharpfin', 8, 'Swimming', 'Ocean', true, 2);
myShark.awake();
myShark.move();
myShark.stop();
myShark.sleep();
