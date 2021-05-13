// Practice Problems: Hard Binding Functions with Contexts
// Exercise 1:
// The `bind` method on function objects can be used to permanently bind a function to a particular
// execution Context

// Exercise 2:
// let obj = {
//   message: 'JavaScript',
// };

// function foo() {
//   console.log(this.message);
// }

// console.log(foo.bind(obj)); // [Function: bound foo]
// Explanation, the bind method returns a new function and needs to be saved in a variable before use

// Exercise 3:
// let obj = {
//   a: 2,
//   b: 3,
// };

// function foo() {
//   return this.a + this.b;
// }

// let bar = foo.bind(obj);

// console.log(foo()); // logs NaN (no context -- referring to global object w/ no a or b values)
// console.log(bar()); // logs 5 -- context execution is bound to obj, uses foo function to create bar

// Exercise 4:
// let positivity = {
//   message: 'JavaScript makes sense!',
// };

// let negativity = {
//   message: 'JavaScript makes no sense!',
// };

// function foo() {
//   console.log(this.message);
// }

// let bar = foo.bind(positivity);

// negativity.logMessage = bar;
// negativity.logMessage(); // logs 'JavaScript makes sense!'
// Explanation: bar is the result of the the foo function being bound to the context of the
// positivity object. Therefore, that execution context is permanent and cannot be changed even
// if it is called on another object

// Exercise 5:
let obj = {
  a: 'Amazebulous!',
};
let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj); // logs 'Amazebulous!'
// Explanation: bar is the foo function bound to the obj as its execution context (this is permanent)
// The execution context cannot be changed even if a method like `call`, `apply` or even `bind` is 
// reinvoked on it