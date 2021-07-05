// Immediately Invoked Function Expressions
(function() {
  console.log('hello');
})();

// Passing Arguments
(function(number) {
  console.log(number + 1);
})(2); // 3

// Function Expressions
let foo = (function() {
  return (function() {
    return 10;
  })() + 5;
})();

console.log(foo); // 15

// Arrow Functions
((first, second) => console.log(first * second))(5, 6); // 30;

// Creating Private Scope if IIFEs - Task (Add code into messy code):
// thousands of lines of messy JavaScript code!

let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
let largest = -Infinity;
for (let index = 0; index < array.length; index += 1) {
  if ((array[index] % 2) === 0 && (array[index] > largest)) {
    largest = array[index];
  }
}
console.log(largest); // 24

// more messy JavaScript code

// Solution (that prevents other same name variables that may be the same as array, largest,
// the name of the normal function we create --- iife's help prevent all of this like so):

// thousands of lines of messy JavaScript code!

console.log((function() {
  let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
  let largest = -Infinity;
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 2) === 0 && (array[index] > largest)) {
      largest = array[index];
    }
  }

  return largest;
})()); // 24

// more messy JavaScript code

// We can even leave the array in the outer scope and pass it as an argument in the solution
// above

// Another technique/ solution: Using Blocks for Private Scope:

// thousands of lines of messy JavaScript code!

{
  let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
  let largest = -Infinity;
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 2) === 0 && (array[index] > largest)) {
      largest = array[index];
    }
  }
  console.log(largest); // 24
}

// more messy JavaScript code

// Using IIFEs to Define Private Data
