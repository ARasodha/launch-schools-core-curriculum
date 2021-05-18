// Practice Problems: Constructors and Prototypes
// Exercise 1:
let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area); // NaN
console.log(rect1.perimeter); // NaN
// Explanation: This code returns NaN for both lines because there is no context given to the this
// keyword on both methods in the RECTANGLE object

// Exercise 2: 
let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this); // <--
  this.perimeter = RECTANGLE.perimeter.call(this); // <--
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);
// Explanation: This code can be fixed by using the call method to invoke both methods with explicit
// context

// Exercise 3:
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2);
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false

// Exercise 4:
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword()); // true
// Explanation: This Ninja constructor function creates a new function with the value swung set to
// true and a new instance of Ninja is created called ninja. The Ninja's constructor has a prototype
// with the method swingSword that returns the value of the property swung. Therefore, when the
// swingSword method is invoked on ninja, it returns true, since it has access to Ninja's methods

// Exercise 5: 
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword()); // undefined
// Explanation: On line 90 the Ninja prototype object is being reassigned to a new object and the
// instance ninja of the constructor Ninja does not have access to this new reassigned object.
// Therefore it does not have access to the swingSword method in the new object and returns undefined
// as it does not recognize that method

// Exercise 6:
function Ninja() {
  this.swung = false;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object
Ninja.prototype.swing = function() {
    this.swung = true;
    return this;
}

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`
// Explanation: The pattern of 'chainable' methods invocations and property accesses on an object
// requires that methods defined on the prototype always return the context object (in this case,
// ninjaA and ninjaB)

// Exercise 7:
let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = new ninjaA.constructor();

console.log(ninjaA.constructor === ninjaB.constructor); // => true

// Exercise 8:
// My Solution:
function User(first, last) {
  return {
    first,
    last,
    name: first + ' ' + last,
  }
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

// Book Solution:
function User(first, last){
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe
