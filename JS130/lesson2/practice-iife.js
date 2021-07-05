// Practice Problems: Immediately Invoked Function Expressions:
// Problem 1:
function() {
  console.log("Sometimes, syntax isn't intuitive!");
}(); // will not invoke as expected due to not being an expression

// Problem 2:
(function() {
  console.log("Sometimes, syntax isn't intuitive!");
}());

// Problem 3:
var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

console.log(sum += (function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers));

// sum += sum(numbers);  // Throws an error because sum is defined twice in the global scope`

// Problem 4:
(function(number) {
  while(number >= 0) {
    console.log(number);
    number -=1;
  }
})(7);

// Problem 5:
(function foo() {
  console.log('Bar');
})();
``
foo() // ? No the named function is not accessible in the global scope because parentheses like
// blocks create private scope

// Problem 6:
let bar = (function(start) {
  let prod = start;
  return function(factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

// Problem 7:
(function countDown(number) {
  console.log(number);
  if (number !== 0) {
    return countDown(number - 1);
  }
})(7);