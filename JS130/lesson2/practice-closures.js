// Practice Problems: Closures
// Problem 1;
let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

incrementCounter = makeCounter(); 
console.log(incrementCounter()); // 3
console.log(incrementCounter()); // 4

// Problem 2:
function makeCounter() {
  return function() {
    let counter = 0;
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 1

incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 1

// Problem 3:
function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

// Problem 4:
function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter1 = makeCounter();
let incrementCounter2 = makeCounter();

console.log(incrementCounter1()); // 1
console.log(incrementCounter1()); // 2

console.log(incrementCounter2()); // 1
console.log(incrementCounter2()); // 2

// Problem 5:
function makeMultipleLister(number) {
  function makeCalculation() {
    let num = number;
    while (num < 100) {
      console.log(num);
      num += number;
    }
   }

   return makeCalculation;
}

let lister = makeMultipleLister(17);
lister();

// Problem 6:
let number = 0;

function add(num) {
  number += num;
  console.log(number)
}

function subtract(num) {
  number -= num;
  console.log(num);
}

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10

// Problem 7:
function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2); // [Function Factor] // 2
let result = bar(3); // 2 * 3 = 6
result += bar(4); // 4 * 6 + 6 = 30
result += bar(5); // 24 * 5 + 30 = 150
console.log(result); // 150

// Problem 8:
function later(func, arg) {
  return function() {
    return func(arg);
  };
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

// Problem 9:
function later2(func, arg) {
  return function(arg2) {
    return func(arg, arg2);
  }
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

// Problem 10:
function bind(context, func) {
  return () => func.call(context);
}

"use strict";

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }