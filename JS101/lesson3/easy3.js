// Lesson 3 - Practice Problems - Easy 3:
// Question 1:
// My Solutions:
let numbers = [1, 2, 3, 4];
// Method 1:
numbers.splice(0, numbers.length);
console.log(numbers);
// Method 2:
numbers.length = 0;
console.log(numbers);
// Method 3:
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

// Question 2:
console.log([1, 2, 3] + [4, 5]); // 1, 2, 34, 5

// Question 3:
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); // hello there

// Question 4:
let arr1 = [{
  first: "value1"
}, {
  second: "value2"
}, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); // [{ first: 42 }, { second: "value2" }, 3, 4, 5];

// Question 5:
// Solution 1:
function isColorValid(color) {
  return color === "blue" || color === "green";
}
// Solution 2:
const isColorValid2 = color => color === 'blue' || color === 'green';
// Solution 3:
const isColorValid3 = color => ['blue', 'green'].includes(color);
