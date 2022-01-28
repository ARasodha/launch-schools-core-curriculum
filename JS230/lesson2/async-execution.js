// Asynchronous Execution with setTimeout
// Problems
// Question 1:
// My Solution:
// function delayLog() {
//   let numbers = [1,2,3,4,5,6,7,8,9,10]
//   numbers.forEach(number => {
//     setTimeout(() => {
//       console.log(number);
//     }, Number(`${number}000`));
//   })
// }

// Lesson Solution:
// function makeLogger(number) {
//   return function() {
//     console.log(number);
//   }
// }

// function delayLog() {
//   for (let idx = 1; idx <= 10; idx++) {
//     let logger = makeLogger(idx);
//     setTimeout(logger, idx * 1000);
//   }
// }

// delayLog();

// Question 2:v
// setTimeout(() => {     // 1
//   console.log('Once'); // 5
// }, 1000);

// setTimeout(() => {     // 2
//   console.log('upon'); // 7
// }, 3000);

// setTimeout(() => {      // 3
//   console.log('a'); // 6
// }, 2000);

// setTimeout(() => {     // 4
//   console.log('time'); // 7
// }, 4000);

// once, a, upon, time

// Question 3:
// g,f,d,z,n,q,s

// Question 4:
// function afterNSeconds(callback, seconds) {
//   setTimeout(callback, seconds * 1000);
// }

// Repeating Execution with setInterval
// Problems
// Question 1:
let number = 1;
let startCounting = setInterval(() => {
  console.log(number);
  number++;
}, 1000);

// Question 2:
let number = 1;
let startCounting = setInterval(() => {
  console.log(number);
  number++;
}, 1000);

let stopCounting = () => {
  clearInterval(startCounting);
}