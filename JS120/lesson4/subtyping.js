// // Subtyping with Constructors and Prototypes

// // Constructors Prototype Combo 1
// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// };

// Rectangle.prototype.toString = function() {
//   return `[Rectangle ${this.length} x ${this.width}]`;
// };

// let rect = new Rectangle(10, 5);
// rect.getArea();     // => 50
// rect.toString();    // => "[Rectangle 10 x 5]"

// // Constructors Prototype Combo 2
// function Square(size) {
//   this.length = size;
//   this.width = size;
// }

// Square.prototype.getArea = function() {
//   return this.length * this.width;
// };

// Square.prototype.toString = function() {
//   return `[Square ${this.length} x ${this.width}]`;
// };

// let sqr = new Square(5);
// sqr.getArea();     // => 25
// sqr.toString();    // => "[Square 5 x 5]"

// // Can use prototypal inheritance to link the prototypes of both constructors together

// function Square(size) {
//   this.length = size;
//   this.width = size;
// }

// Square.prototype = Object.create(Rectangle.prototype);  // <--
// Square.prototype.constructor = Square; // gets over written with the step in the line above and
// // needs to be set back 
// Square.prototype.toString = function() {
//   return `[Square ${this.length} x ${this.width}]`;
// }; // Since this method needs to be different we rewrite it to override the rectangle toString

// let sqr = new Square(5);
// sqr.getArea();     // => 25
// sqr.toString();    // => "[Square 5 x 5]"

// // Explanation: now the prototype chain looks like this:
// // sqr ---> Square.prototype ---> Rectangle.prototype ---> Object.prototype

// // case 1: logs Hello!
// // case 2: undefined, bye is on not on the greeting proto its on the goodbye proto
// // case 3: undefined, no argument passed to greet even tho hello has access to it
// // case 4: logs Goodbye
// // case 5: type error, hi is a instance method not static


// function singTo(other){
//   return this.name + ' sings for ' + other.name
// }
// console.log(singTo.call('jack', 'jill'));

// // 'Jack sings for Jill'



function setMovie(movie) {
  this.movie = movie;
}

var theater = {
  loadProjector: setMovie,
  
  playMovie: function(movie, previewLength) {
    this.loadProjector(movie);
    let self = this;
    setTimeout(function() {
      console.log("Now playing: " + self.movie);
    }, previewLength);
  }
};

console.log(theater.playMovie("Gremlins", 1000));  // "Now playing: undefined"