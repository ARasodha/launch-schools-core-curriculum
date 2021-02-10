// Lesson 3 - Practice Problems - Easy 2:
// Question 1:
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// let newAdvice = advice.replace('important', 'urgent');
// console.log(newAdvice);

// Question 2:
// My Solution:
// With Reverse Method:
// let numbers = [1, 2, 3, 4, 5];
// let empty = [];
// let newNumbers = numbers.concat(empty).reverse();
// // With Sort Method:
// let numbers = [1, 2, 3, 4, 5];
// let empty = [];
// let newNumbers = numbers.concat(empty).sort((num1, num2) => num2 - num1);

// console.log(numbers); // Original Array not mutated
// console.log(newNumbers);

// My Solution with Lesson Hint:
// With Reverse and Slice Methods:
// let numbers = [1, 2, 3, 4, 5];
// let newArray = numbers.slice(0, numbers.length).reverse();

// With Sort Method and Spread Syntax:
// let numbers = [1, 2, 3, 4, 5];
// let newArray = [...numbers].sort((num1, num2) => num2 - num1);

// console.log(numbers); // Original Array not mutated
// console.log(newArray);

// Question 3:
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
// let number1 = 8;  // false
// let number2 = 95; // true
// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// Question 4:
// let famousWords = "seven years ago...";
// // Method 1:
// let expected = "Four score and";
// console.log(expected + ' ' + famousWords);
// // Method 2:
// console.log(`Four score and ${famousWords}`);
// // Third Possible Method from Lesson:
// console.log('Four score and '.concat(famousWords));

// Question 5:
// let numbers = [1, 2, 3, 4, 5];
// let index2 = numbers.indexOf(3);
// numbers.splice(index2, 1);
// console.log(numbers);

// Question 6:
// My Solution 1:
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let result = [];
result.push(flintstones.shift());
result.push(flintstones.shift());
for (let idx = 0; idx < flintstones.length; idx++) {
  for (let jdx = 0; jdx < flintstones[idx].length; jdx++) {
    result.push(flintstones[idx][jdx]);
  }
}
console.log(result);

// Lesson Solution w/ Concat:
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"],
  ["Bambam", "Pebbles"]
];
flintstones = [].concat(...flintstones);
console.log(flintstones);
// Lesson Solution w/ Reduce:
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
console.log(flintstones);
// Lesson Solution w/ forEach:
let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element)
});
console.log(newFlintstones);
