class Vehicle {
    model: string;
    year: number;
    brand: string;
    
    constructor(model: string, year: number, brand: string) {
        this.model = model
        this.year = year
        this.brand = brand
    }
}

class Car extends Vehicle {
    doors: number

    constructor(model: string, year: number, brand: string, doors: number) {
        super(model, year, brand)
        this.doors = doors;
    }
}

class Motocycle extends Vehicle {
    wheels: number
    passengers: number

    constructor(model: string, year: number, brand: string, passengers: number) {
        super(model, year, brand)
        this.wheels = 2;
        this.passengers = passengers;
    }
}

module.exports = { Car, Motocycle };