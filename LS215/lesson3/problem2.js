// Problem 2
/*
Input: string
Output: boolean
Rules
- the Luhn Formula is a simple checksum formula used to validate a variety of id numbers
- it verifies against its included check digit, which is usually appended to a partial number
to generate the full number
- the number must pass the following test:
  - counting from the rightmost digit and moving left, double the value of every second digit
  - for any digit that thus becomes 10 or more, subtract 9 from the result
    - 1111 becomes 2121
    - 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 AND 2 x 8 = 16 -> 16 - 9 = 7)
  - add all these digits together 
    - 1111 becomes 2121 sums at 2 + 1 + 2 + 1 to give a checksum of 6
    - 8763 becomes 7733 sums as 7 + 7 + 3 + 3 is 20
- if the total checksum ends in 0 (put another way, if the total module 10 is congruent to 0), 
then the number is valid according to the Luhn Foruma; else it is not valid
- thus, 1111 is not valid (as show above, it comes out to 6), while 8763 is valid (as show above,
  it comes out to 20)
- write a program that, give a number in string format, check if it is valid per the Luhn Formula
- this should teat, for example "2323 2005 7766 3554" as valid
- you can ignore all non-numeric characters in the input string
Test Cases
- 2323 - valid
- 2005 - valid
- 7766 - valid
- 3554 - valid
- 1111 - not valid
- 87563 - valid
- 2a32b3 - valid
- a1b1b11 - not valid
Data Structure
- array -- to use higher order functions
Algorithm
- create `cleanInput` - take input string and filter out any non-numeric characters
- turn input string into an array and reverse it
- iterate over array and double numbers at an odd index, if the sum is greater than or equal to 
10, subtract 9 
  - sum entire new number
  - return number % 10 === 0
*/

// Code
function luhnFormula(numString) {
  let cleanNumString = numString.replace(/[^0-9]/gi, '');
  let reverseNums = cleanNumString.split('').reverse();

  let sum = reverseNums.map((num, idx) => {
    if (idx % 2 === 1) {
      num = Number(num) * 2;
      if (num >= 10) {
        return num - 9;
      }
      return num;
    } else {
      return Number(num);
    }
  });
  
  return sum.reduce((accum, val) => accum + val) % 10 === 0;
}

// Test Cases
console.log(luhnFormula("2323 2005 7766 3554")); // true
console.log(luhnFormula('1111')); // false
console.log(luhnFormula('8763')); // true
console.log(luhnFormula('8a76b3')); // true
console.log(luhnFormula('a1b1b11')); // false
console.log(luhnFormula("        ---- x2323 ds2005 ddd7766   .,a/ 3554")); // true

// Add On Question:
// Write a function that can add a check digit to make the number valid per the Luhn formula
// and return the original number plus that digit. This should give "2323 2005 7766 3554" in 
// response to "2323 2005 7766 355"
/*
Input: string
Output: string
Rules
- write a function that can add a check digit to make the number valid per the Luhn Formula
and return the original number plus that digit
- this should give "2323 2005 7766 3554" in response to "2323 2005 7766 355"
Algorithm
- create checkDigit function that takes input string of numbers
- pass the string to `luhnFormula`
  - if it returns true, return that number
  - if it returns false
    - create newNumber and set it to 0
    - create a while loop that runs while newNumber is less than or equal to 9
    and on each round of iteration:
      - append `newNumber` to the end of the input string and pass it to luhnFormula
        - if it returns true, break the loop and return the new string
        - if it returns false, increment newNumber and try again
*/

function checkDigit(numString) {
  if (luhnFormula(numString)) return numString;
  let newNumber = 0;

  while(newNumber <= 9) {
    if (luhnFormula(numString + String(newNumber))) {
      return numString + String(newNumber);
    } else {
      newNumber++;
    }
  }
}

// Test Cases
console.log(checkDigit("2323 2005 7766 355")); // "2323 2005 7766 3554"
console.log(checkDigit("2323 2005 7766 3555"));
console.log(checkDigit("2323 2005 7766 35213213123125"));
console.log(luhnFormula("2323 2005 7766 3554")); // "2323 2005 7766 3554"

