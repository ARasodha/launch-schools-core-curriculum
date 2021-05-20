// Practice Problems for Mix-ins
// Exercise 1:
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}
Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Truck.prototype, Speed);

let ferrari = new Car();
ferrari.goFast();

let ford = new Truck();
ford.goFast();

console.log('goFast' in ferrari);
console.log('goFast' in ford);

// Exercise 2:
// Explanation: The name is integrated in the output string by using the current context which is the object
// that the method is invoked on and accessing the constructor of that object and printing its name property.
// The name property is a static method on the Function built in Object Function in JavaScript.

// Exercise 3:
const getRange = {
  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
}
class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

Object.assign(WheeledVehicle.prototype, getRange);

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
}

Object.assign(Catamaran.prototype, getRange);




  let moto = new Motorcycle([20, 20], 80, 8.0);
  console.log(moto.range());
Catamaran.prototype = Object.assign(Catamaran.prototype, WheeledVehicle.prototype);

let cata = new Catamaran(3, 2, 80, 8.0);
console.log(cata);
console.log(cata.range());