// Built-in Constructors
// The Array constructor
// The way we are used to creating an array (bracket syntax):
let numbers = [1, 2, 3, 4];
console.log(numbers);

// The Array constructor way to create an array:
let numbers = new Array(1, 2, 3, 4);
console.log(numbers);

function func(first, second, third) {
  return arguments;
}
console.log(func(1, 'apple', [200]));
console.log(Array.from(func(1, 'apple', [200])));


let now = new Date();
console.log(now.valueOf());

// String Constructor
let strPrimitive = 'abc';
console.log(strPrimitive.valueOf());
console.log(typeof strPrimitive);

let strObject = new String('xyz');
console.log(strObject);
console.log(typeof strObject);

// ES6 Classes
// Normal Way
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.width * this.length;
}

let rec = new Rectangle(10, 5); 
console.log(typeof Rectangle); // function
console.log(rec instanceof Rectangle);  // true
console.log(rec.constructor); // [Function: Rectangle]
console.log(rec.getArea()); // 50

// Class Way
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

let rec = new Rectangle(10, 5); 
console.log(typeof Rectangle); // function
console.log(rec instanceof Rectangle);  // true
console.log(rec.constructor); // [class: Rectangle]
console.log(rec.getArea()); // 50

// Defining a static method on a regular constructor
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.getDescription = function() {
  return 'A rectangle is a shape with 4 sides';
}

console.log(Rectangle.getDescription());

// Defining a static method using ES6 classes
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

 static getDescription() {
   return 'A rectangle is a shape with 4 sides';
 }
 
 getArea() {
   return this.length * this.width;
 }
}

console.log(Rectangle.getDescription());