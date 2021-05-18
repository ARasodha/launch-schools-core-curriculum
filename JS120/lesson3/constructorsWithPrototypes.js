// // Constructors with Prototypes
// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;

//   this.bark = function() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   };
// }

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
// let biggie = new Dog('Biggie', 'Whippet', 9);

// maxi.bark(); // 'Woof!'

// maxi.hasOwnProperty('bark');   // true
// dexter.hasOwnProperty('bark'); // true
// biggie.hasOwnProperty('bark'); // true
// maxi.bark === dexter.bark;     // false
// maxi.bark === biggie.bark;     // false
// dexter.bark === biggie.bark;   // false

// // Can use prototypes with constructors to define the method once in the proto object and no repeat it
// let DogPrototype = {
//   bark() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   }
// };

// function Dog(name, breed, weight) {
//   Object.setPrototypeOf(this, DogPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   // this.bark method removed.
// }
// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
// let biggie = new Dog('Biggie', 'Whippet', 9);

// maxi.bark(); // 'Woof!'
// console.log(Dog.myPrototype);
// maxi.hasOwnProperty('bark'); // false
// dexter.hasOwnProperty('bark'); // false
// biggie.hasOwnProperty('bark'); // false
// Object.getPrototypeOf(maxi).bark === DogPrototype.bark; // true
// Object.getPrototypeOf(dexter).bark === DogPrototype.bark; // true
// Object.getPrototypeOf(biggie).bark === DogPrototype.bark; // true

// // Since Functions are also objects we can associate our prototype and function clearer like so:
// function Dog(name, breed, weight) {
//   Object.setPrototypeOf(this, Dog.myPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.myPrototype = {
//   bark() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   }
// };

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
// let biggie = new Dog('Biggie', 'Whippet', 9);
// maxi.bark(); // 'Woof!'

// maxi.hasOwnProperty('bark'); // false
// dexter.hasOwnProperty('bark'); // false
// biggie.hasOwnProperty('bark'); // false
// Object.getPrototypeOf(maxi).bark === Dog.myPrototype.bark; // true
// Object.getPrototypeOf(dexter).bark === Dog.myPrototype.bark; // true
// Object.getPrototypeOf(biggie).bark === Dog.myPrototype.bark; // true
// console.log(dexter.myPrototype);

// // JavaScript Provided Constructor Function Prototype (no need for the above - home grown constructor
// // prototype pairing)
// function Dog(name, breed, weight) {
//   // deleted Object.setPrototypeOf(this, Dog.myPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.prototype.bark = function() {
//   console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
// };

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// maxi.bark(); // 'Woof!'

// let biggie = new Dog('Biggie', 'Whippet', 9);
// biggie.bark(); // 'Yip!'

// console.log(maxi.constructor);
// console.log(maxi instanceof Dog);


// let obj = {
//   monkey: 'yep'
// }

// console.log(typeof obj === 'object');
// console.log(obj.hasOwnProperty('monkey'));
// console.log(obj.__proto__ === Object.prototype);
// console.log(Object.getPrototypeOf(obj) === Object.prototype);

// console.log(obj.constructor === Object);
// console.log(Object.prototype);


// const userFunctions = {
//   add: function() {this.points += 1},
//   login: function() {console.log("You're logged in")},
// }

// function userCreator(name, points) {
//   const newUser = Object.create(userFunctions);
//   newUser.name = name;
//   newUser.points = points;
//   return newUser;
// }

// const user = userCreator('Ryan', 3);
// console.log(user);

// console.log(typeof Object === 'function');


function func() {
  return null;
}

func.prototype.bark = function() {
  console.log('Bark');
}

console.log(func());
console.log(func.prototype);
console.log(func.prototype.bark);
console.log(func.prototype.bark());

console.log(Object.getPrototypeOf(func) === Function.prototype);
console.log(func.constructor === Function);