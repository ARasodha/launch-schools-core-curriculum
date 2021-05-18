// Constructors

// A single car object
let car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2016,
  start: false,

  start() {
    this.started = true;
  },

  stop() {
    this.started = false;
  },
}

// Factory Function - make multiple cars
function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    started: false,

    start() {
      this.started = true;
    },

    stop() {
      this.started = false;
    }
  };
}

let corolla = createCar('Toyota', 'Corolla', 2016);
let leaf = createCar('Nissan', 'LEAF', 2018);
let nova = createCar('Chevrolet', 'Nova', 1974);


// Another way -- Constructor Function with the New keyword
function Car(make, model, year)  {
  this.make = make;
  this.model = model;
  this.year = year;
  this.started = false;

  this.start = function() {
    this.started = true;
  };

  this.stop = function() {
    this.started = false;
  };
}

let corolla = new Car('Toyota', 'Corolla', 2016);
let leaf = new Car('Nissan', 'LEAF', 2018);
let nova = new Car('Chevrolet', 'Nova', 1974);

console.log(corolla);
console.log(leaf);
console.log(nova);

console.log(corolla instanceof Car);

// Practice Problems
// Exercise 1:
// Explanation: Constructor functions use the keyword new and capitalize the first letter of the 
// function name

// Exercise 2:
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // TypeError
// Explanation: Since scamper is an undefined property on lizzy and since Lizard is invoked without
// the new operator and it doesnt have an explicit return value, the return value is undefined.
// Therefore, lizzy gets assigned to undefined, which causes the call to scamper to throw an error
// because you cant call a method on undefined

// Exercise 3:
function Lizard() {
    this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?