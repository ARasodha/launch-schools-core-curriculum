// Selection and Transformation Lesson Problem:
// Selection
// My Solution:
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};
// My Solution:
function selectFruit(produce) {
  let fruits = {};
  for (let item in produce) {
    if (produce[item] === 'Fruit') {
      fruits[item] = produce[item];
    }
  }
  return fruits;
}
// Lesson Solution:
function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let fruitsList = {};
  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      fruitsList[currentKey] = currentValue;
    }
  }
  return fruitsList;
}
console.log(selectFruit(produce));
console.log(produce);
// selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

// Transformation:
// My Solution:
let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumber(numbersArray) {
  for (let idx = 0; idx < numbersArray.length; idx++) {
    numbersArray[idx] *= 2;
  }
  return numbersArray;
}
console.log(doubleNumber(myNumbers));
console.log(myNumbers);
// doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
// myNumbers;                // => [1, 4, 3, 7, 2, 6]

// Identity Transformation:
function doubleOddIndexes(numbersArray) {
  let doubledNums = [];
  let count = 0;
  while (count < numbersArray.length) {
    if (count % 2 === 1) {
      doubledNums.push(numbersArray[count] * 2);
    } else {
      doubledNums.push(numbersArray[count]);
    }
    count++;
  }
  return doubledNums;
}
let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndexes(myNumbers)); // => [1, 8, 3, 14, 2, 12]

// More Flexible Functions:
function multiply(numbers, multiplier) {
  let multipliedNums = [];
  for (let idx = 0; idx < numbers.length; idx++) {
    let newNum = numbers[idx];
    multipliedNums.push(newNum * multiplier);
  }
  return multipliedNums;
}
let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
console.log(myNumbers);
