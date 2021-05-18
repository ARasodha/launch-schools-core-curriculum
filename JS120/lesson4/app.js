1// Object Creation with Prototypes
// Objects Linking to Other Objects (OLOO Pattern)

//  let carPrototype = {
//    start: function() {
//      this.started = true;
//    },
//    stop: function() {
//      this.started = false;
//    },
//  };

//  let car1 = Object.create(carPrototype);
//  car1.make = 'Toyota';
//  car1.model = 'Corolla';
//  car1.year = 2016;

//  console.log(car1);
//  car1.start();
//  console.log(car1);

 // Can use init method to set state easier 

 let carPrototype = {
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  },
  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    return this;
  },
};

let car1 = Object.create(carPrototype).init('Toyota', 'Corolla', 2016);
car1.start();
console.log(car1);