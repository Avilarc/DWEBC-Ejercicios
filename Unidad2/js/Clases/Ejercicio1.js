class Vehicle {
    constructor(manufacturer, model, year, engineType, powerSource, power, cubicCentimeters, topSpeed, licenseNeeded) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.engineType = engineType;
        this.powerSource = powerSource;
        this.power = power;
        this.cubicCentimeters = cubicCentimeters;
        this.topSpeed = topSpeed;
        this.licenseNeeded = licenseNeeded;
        this.engineStatus = 'off';
        this.speed = 0;
        this.reservoirLevel = 100; 
    }

    ignite() {
        if (this.engineStatus === 'off') {
            console.log(`${this.manufacturer} ${this.model}'s engine is now on.`);
            this.engineStatus = 'on';
        } else {
            console.log(`${this.manufacturer} ${this.model}'s engine is already on.`);
        }
    }

    stopEngine() {
        if (this.engineStatus === 'on') {
            console.log(`${this.manufacturer} ${this.model}'s engine is now off.`);
            this.engineStatus = 'off';
        } else {
            console.log(`${this.manufacturer} ${this.model}'s engine is already off.`);
        }
    }

    refillReservoir() {
        console.log(`Refilling ${this.manufacturer} ${this.model}'s reservoir.`);
        this.reservoirLevel = 100;
    }

    increaseSpeed() {
        if (this.engineStatus === 'on') {
            this.speed += 10;
            console.log(`${this.manufacturer} ${this.model}'s speed increased to ${this.speed} km/h.`);
        } else {
            console.log(`Cannot increase speed. ${this.manufacturer} ${this.model}'s engine is off.`);
        }
    }

    decreaseSpeed() {
        if (this.engineStatus === 'on' && this.speed > 0) {
            this.speed -= 10;
            console.log(`${this.manufacturer} ${this.model}'s speed decreased to ${this.speed} km/h.`);
        } else if (this.speed === 0) {
            console.log(`${this.manufacturer} ${this.model} is already at a standstill.`);
        } else {
            console.log(`Cannot decrease speed. ${this.manufacturer} ${this.model}'s engine is off.`);
        }
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, model, year, engineType, powerSource, power, cubicCentimeters, topSpeed, licenseNeeded, cargoCapacity) {
        super(manufacturer, model, year, engineType, powerSource, power, cubicCentimeters, topSpeed, licenseNeeded);
        this.cargoCapacity = cargoCapacity;
    }
}

class Car extends Vehicle {
    constructor(manufacturer, model, year, engineType, powerSource, power, cubicCentimeters, topSpeed, licenseNeeded, passengers) {
        super(manufacturer, model, year, engineType, powerSource, power, cubicCentimeters, topSpeed, licenseNeeded);
        this.passengers = passengers;
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, model, year, engineType, powerSource, power, cubicCentimeters, topSpeed, licenseNeeded, hasHelmet) {
        super(manufacturer, model, year, engineType, powerSource, power, cubicCentimeters, topSpeed, licenseNeeded);
        this.hasHelmet = hasHelmet;
    }
}

class Van extends Vehicle {
    constructor(manufacturer, model, year, engineType, powerSource, power, cubicCentimeters, topSpeed, licenseNeeded, cargoVolume) {
        super(manufacturer, model, year, engineType, powerSource, power, cubicCentimeters, topSpeed, licenseNeeded);
        this.cargoVolume = cargoVolume;
    }
}

class Caravan extends Vehicle {
    constructor(manufacturer, model, year, engineType, powerSource, power, cubicCentimeters, topSpeed, licenseNeeded, beds) {
        super(manufacturer, model, year, engineType, powerSource, power, cubicCentimeters, topSpeed, licenseNeeded);
        this.beds = beds;
    }
}


const myCar = new Car('Toyota', 'Camry', 2022, 'Combustion', 'Gasoline', 150, 2000, 180, 'Class C', 5);
myCar.ignite();
myCar.increaseSpeed();
myCar.decreaseSpeed();
myCar.stopEngine();

const myMotorcycle = new Motorcycle('Harley-Davidson', 'Sportster', 2021, 'Combustion', 'Gasoline', 60, 1200, 160, 'Class M', true);
myMotorcycle.ignite();
myMotorcycle.increaseSpeed();
myMotorcycle.stopEngine();