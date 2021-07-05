// Shorthand Notation (Syntactic Sugar):
// Concise Property Initializers 
// Concise Property + Initializers

// Object Destructuring:
let obj = {
  foo: 'foo',
  bar: 'bar',
  qux: 42,
};

let foo = obj.foo;
let bar = obj.bar;
let qux = obj.qux;

// Concise version (order of names in brace + space not important):
let { foo, bar, qux } = obj;
// Note: variables not needed can be omitted from the curly brace
// Alternative:
let { qux: myQux, foo, bar } = obj;
// myQux receives the value from obj.qux

// Destructuring also works with function parameters
function xyzzy({ foo, bar, qux }) {
  console.log(qux); // 3
  console.log(bar); // 2
  console.log(foo); // 1
}

let obj = {
  foo: 1,
  bar: 2,
  qux: 3,
}

xyzzy(obj);

// if we need to perform assignment we must put parentheses around 
// the brackets so the JS engine does not think we are creating a block
{ foo, bar, qux } = obj; // error
({ foo, bar, qux } = obj); // correct way

// Array Destructuring:
let foo = [1, 2, 3];
let [ first, second, third ] = foo;

// Equivalent to:
let foo = [1, 2, 3];
let first = foo[0];
let second = foo[1];
let third = foo[2];

// If all the elements are not needed they can be skipped like so:
let bar = [1, 2, 3, 4, 5, 6, 7];
let [ first, , , fourth, fifth, , seventh ] = bar;

// Multiple Assignments in a single expression:
let one = 1;
let two = 2;
let three = 3;

let [ num1, num2, num3 ] =  [one, two, three];

console.log(num1);   // 1
console.log(num2);   // 2
console.log(num3);   // 3

// Rest syntax in array destructuring:
let foo = [1, 2, 3, 4];
let [ bar, ...qux ] = foo;
console.log(bar);   // 1
console.log(qux);   // [2, 3, 4]

// // Spread Syntax
let arr = [1, 2, 3, 4, 5];
let [first, , third, ...otherValues] = arr;
console.log(first);
console.log(third)
console.log(otherValues);
console.log(arr === otherValues)