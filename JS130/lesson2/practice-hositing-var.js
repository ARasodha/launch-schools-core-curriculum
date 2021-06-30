// Practice Problems: Hoisting and the var Statement
// Problem 1:
var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo(); // Bye
// Explanation: function declarations get hoisted above variable declarations. Both have the same
// name, therefore, the foo function expression resassigns the foo function declaration and is
// invoked

// Problem 2:
for (var index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    var foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);
// // undefined
// // Hello
// // Bye
// // 2

// Problem 3:
bar();

var bar = function() {
  console.log("foo!");
};
// TypeError bar is not a function
// Explanation: bar is defined with var so it is declared and initialized to undefined, until its assigned
// to a function expression later in the program which does not get hoisted. Since you cannot
// invoke undefined it raises an error

// Problem 4:
var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo(); // 80
// Explanation: NaN. var has function scope therefore, the
// var outside of the foo function is outside the function body is out of scope and inside
// the function a new var variable is being declared and initializes to undefined, therefore,
// initializing bar to bar - 42 results in NaN because any math operation on undefined
// results in NaN

// Problem 5:
function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function() {
      qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);

// Problem 6:
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

var Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);