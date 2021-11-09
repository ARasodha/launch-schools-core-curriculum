// Practice Problem 3:
/*
Input: string
Output: number
Rules
- write a function named `octalToDecimal` that performs octal to decimal conversion
- when invoked on a string that contains the representation of an octal number,
the function returns a decimal version of that value as a number
- implement the conversion yourself, and do not use an built-in conversion features
Algorithm 
- take number string and split it into an array of numStrings
- create exponent var and initial it to the length of the numStrings array - 1
- iterate over numStrings
  - on each round of iteration multiply the number by 10 to the power of the exponent
    - decrement the exponent by 1 on each round of iteration
- after the loop has terminated return the sum of the numbers in the numString
array as a number
*/
// My Solution:
function octalToDecimal(numberString) {
  let exp = numStrings.length;
  let result = numStrings.split('').map(numStr => {
    exp -= 1;
    return Number(numStr) * Math.pow(8, exp);
  });

  return result.reduce((accum, val) => accum + val, 0);
}

// Lesson Solution:
function octalToDecimal(numberString) {
  return numberString.split('').reduce((sum, digitChar, index) => {
    return sum + Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  }, 0);
}

// Tests
console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
