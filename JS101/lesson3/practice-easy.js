// Extra Practice
// Easy 2 - Question 6:
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"],
  ["Bambam", "Pebbles"]
];
// With Concat Method:
console.log([].concat(...flintstones));
// With forEach Method:
let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
  return newFlintstones;
});
console.log(newFlintstones);
// With Reduce:
flintstones = flintstones.reduce((accum, val) => {
  return accum.concat(val);
}, []);
console.log(flintstones);

// Easy 2 - Question 9:
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);
console.log(title.padStart(padding + title.length));

// Easy 2 - Question 10:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);

// Easy 3 - Question 4:
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); // [{ first: 42 }, { second: "value2" }, 3, 4, 5];

// Easy 3 - Question 5:
// Solution 1:
function isColorValid(color) {
  return color === 'blue' || color === 'green';
}
// Solution 2:
const isColorValid2 = color => ['green', 'blue'].includes(color);
// Solution 3:
const isColorValid3 = color => color === 'green' || color === 'blue';
