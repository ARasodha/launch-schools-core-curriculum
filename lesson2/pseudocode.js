/// TASK 1: A function that returns the sum of two numbers:

/*
START

# Given two numbers

Create SUM function

SET firstNumber as first parameter
SET secondNumber as second parameter

PRINT firstNumber + secondNumber

END
*/

//

function sum(number1, number2) {
  return number1 + number2;
}
console.log(sum(1, 2));

/*
TASK 2: A function that takes an array of strings and returns a string
that is all those strings concatenated together.

START

# Given array of strings

Create a function.

SET first paramter to arrayOfStrings

Create for loop to iterate over each element in array

SET iterator < arrayOfStrings.length

SET result = ''

Concat each element in array to result

PRINT result

END
*/

function concat(arrayOfStrings) {
  let result = '';
  for (let idx = 0; idx < arrayOfStrings.length; idx++) {
    result += arrayOfStrings[idx];
  }
  return result;
}
let arrayOfStrings = ['software', 'engineer', 'launch', 'school'];
console.log(concat(arrayOfStrings));


/* TASK 3: A function that takes an array of integers, and returns a new
array with every other element.

START

# Given array of integers

Create a function

SET one parameter to arrayOfInts

SET result to empty array

iterate over arrayOfInts with for loop

SET iterator = 0 and iterate until iterator < arrayOfInts.length

IF iterator value is odd, push current index in arrayOfInts into result arrayOfInts

PRINT result array

END
*/

function everyOther(arrayOfInts) {
  let result = [];
  for (let idx = 0; idx < arrayOfInts.length; idx++) {
    if (idx % 2 === 1) {
      result.push(arrayOfInts[idx])
    }
  }
  return result;
}
let arrayOfInts = [1, 23, 42, 2, 34, 5];
console.log(everyOther(arrayOfInts));
