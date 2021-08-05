// Asynchronous Execution with setTimeout

// Synchronous Code/ Sequential Code - line by line 1 at a time is executed 
let a = 38;            // set a to 38 // runs 1
a += 4;                // set a to 42  // runs 2 
console.log(a);        // log 42 to the console // runs 3 

// Synchronous Code does not need to run in order (in a straight line like the example above)
function logger(object) {        // define a Function logger                 // runs 1
  console.log(object);           // that logs its parameter                  // runs 4 5 6 7 
}

let numbers = [3, 7, 25, 39];    // set numbers to [3, 7, 25, 39]            // runs 2
numbers.forEach(logger);         // call forEach with logger as a callback   // runs 3
console.log(numbers.length);     // log 4                                    // runs 8
// JavaScript evaluates on line at a time until the program finishes (doesn't stop until  it completes)


// Asynchronous Code - runs partly now, then pauses and continues to run after a delay (any amount of time)
// setTimeout() - a good example because it makes the code wait and run later
setTimeout(function() {  // runs 1
  console.log('!');
}, 3000);

setTimeout(function() {  // runs 2
  console.log('World');  // runs 4
}, 1000);

console.log('Hello');    // runs 3

// outputs
// Hello
// undefined (the last lines return value)
// World
// !

// Problems
// E1:
function delayLog() {
  for (let count = 1; count <= 10; count++) {
    setTimeout(() => console.log(count), count * 1000);
  }
}

delayLog();

// E2:
function delayLog() {
  for (var count = 1; count <= 10; count++) {
    setTimeout(() => console.log(count), count * 1000);
  }
}

delayLog(); // outputs 11, 10 times with increasing delay since var has function scope the callback
// closure keeps the last value of count since the loop terminates before the setTimeout delay

// E3:
setTimeout(function() {   // runs 1
  console.log('Once');    // runs 5
}, 1000);

setTimeout(function() {   // runs 2
  console.log('upon');    // runs 7
}, 3000);

setTimeout(function() {   // runs 3
  console.log('a');       // runs 6
}, 2000);

setTimeout(function() {   // runs 4
  console.log('time');    // runs 8
}, 4000);

// E4:
setTimeout(function() {
  setTimeout(function() {
    q(); // 7
  }, 15);

  d(); // 3

  setTimeout(function() {
    n(); // 5
  }, 5);

  z(); // 4
}, 10);

setTimeout(function() {
  s(); // 6
}, 20);

setTimeout(function() {
  f(); // 2
});

g(); // 1

// E5:
  function afterNSeconds(callback, seconds) {
    setTimeout(callback, seconds * 1000);
}