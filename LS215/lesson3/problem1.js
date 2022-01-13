// Problem 1
/*
Input: string
Rules: string
- write a program that cleans up user entered phone numbers so that they can be sent as SMS 
messages
- other than digits, the number may also contain special characters such as spaces, dash, dot
and parentheses that should be ignored
- if the phone number is less than 10 digits, assume that the number is bad
- if the phone number is 10 digits, assume that it is good
- if the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
- if the phone number is 11 digits and the first number is not 1, then it is a bad number
- if the phone number is more than 11 digits, assume that it is a bad number
- for bad numbers, just return a string of 10 0's
Test Cases 
- cleanNumber('123456789'); // '0000000000'
- cleanNumber('1234567890'); // '1234567890'
- cleanNumber('(123)456-7890'); // '(123)456-7890'
- cleanNumber('123.456.7890'); // '123.456.7890'
- cleanNumber('1123-456-7890'); // '123-456-7890'
- cleanNumber('21234567890'); // '21234567890'
- cleanNumber('123456789101'); // '0000000000'
- cleanNumber('121a222121'); // '0000000000'
- cleanNumber('123a1231231'); // '0000000000'
Data Structure
- string 
Algorithm
- map over dirty 
- filter over the characters in the number, if they are not a number, space, parentheses, dash
or dot, remove that character
- create `digitCount` that takes the filteredNumber as a string. this function returns the number of 
digits in the number
- if the digit count is less than 10, return a bad number
- if the digit count is 10, return the number
- if the digit count is 11 and the first number is 1, remove the first number and return the last 
10 digits
  - otherwise return a bad number
    - create helper to obtain first number from a number
- if the numbers digit count is more than 11, return a bad number

Questions:
- are we cleaning a number? remove characters that aren't numbers, spaces, parentheses, dashes or 
dots? 
- are we returning the number without any characters not mentioned in question? 
- what if the number has 1 or more space, parentheses, dash, or dots in a row? is that acceptable?
*/

function cleanNumber(dirtyNumber) {
  const BAD_NUMBER = '0000000000';

  let cleanNumber = dirtyNumber.split('').filter(char => /[0-9()-\s.]/g.test(char)).join('');
  let numberCount = digitCount(cleanNumber);
  let firstNumberIndex = getFirstNumberIndex(cleanNumber);

  if (numberCount < 10) {
    return BAD_NUMBER;
  } else if (numberCount === 10) {
    return cleanNumber;
  } else if (numberCount === 11 && cleanNumber[firstNumberIndex] === '1') {
    let cleanNumberArray = cleanNumber.split('');
    cleanNumberArray.splice(firstNumberIndex, 1);
    return cleanNumberArray.join('');
  } else {
    return BAD_NUMBER;
  }
}

function digitCount(numString) {
  return numString.split('').reduce((sum, char) => {
    if (char === ' ') {
      sum += 0;
    } else if (Number.isInteger(Number(char))){
      sum += 1;
    }
    return sum;
  }, 0);
}

function getFirstNumberIndex(numString) {
  let index = numString.split('').findIndex(char => Number.isInteger(Number(char)));
  return index;
}

console.log(cleanNumber('123456789')); // '0000000000'
console.log(cleanNumber('1234567890')); // '1234567890'
console.log(cleanNumber('(123)456-7890')); // '(123)456-7890'
console.log(cleanNumber('123.456.7890')); // '123.456.7890'
console.log(cleanNumber('1123-456-7890')); // '123-456-7890'
console.log(cleanNumber('21234567890')); // '0000000000'
console.log(cleanNumber('123456789101')); // '0000000000'
console.log(cleanNumber('121a222121')); // '0000000000'
console.log(cleanNumber('123a1231231')); // '1231231231
console.log(cleanNumber('123 456 7890')); // '123 456 7890'

