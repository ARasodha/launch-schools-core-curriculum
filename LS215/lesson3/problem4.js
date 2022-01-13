// Problem 4
/*
Input: string
Output: array
Rules
- you are given a list of numbers in a "short-hand" range where only the significant part of the 
next number is written because we know the numbers are always increasing
  - for example: "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]
- some people use difference separators for their ranges
  - for example: "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represents the same numbers [1, 2, 3, 11, 12]
- range limits are always inclusive
- your job is to return a list of complete numbers
- the possible separators are ["-", ":", ",", ".."]
Examples/ Test Cases
- "1,3,7,2,4,1" => 1,3,7,12,14,21
- "1-3, 1-2" => 1,2,3,11,12
- "1:5:2" => 1,2,3,4,5,6, ...12
- "104-2" => 104,105, ... 112
- "104-02" => 104, 105, ...202
- "545, 64:11" => 545,564,565, ..611
Data Structure
- array - make use of higher order functions to iterate over numbers in input strings
Algorithm
- create numbers and initialize it to -> split input string bv the comma, convert all nums to Number
type
- create result empty array
- create frontNum and initialize it to 0
- iterate over the numbers and on each round of iteration:
  - if the current index is greater than 0
    - if the current number is less than the previous number increment frontNum by 1 and append it 
    to the current number, then push the number to the result array
    - if the current number is less or equal to the previous number then push it as is into result
  - if the current index is 0, push the number to result 
- once the loop has terminated return result array
*/
// --- INCOMPLETE --- 
function shortHand(numsString) {
  let numbers = numsString.split(',').map(Number);
  let result = [];
  let frontNum = 0;

  for (let idx = 0; idx < numbers.length; idx++) {
    if (idx !== 0) {
      if (numbers[idx] < result[idx - 1]) {
        frontNum++;
        result.push(`${frontNum}${numbers[idx]}`);
      } else {
        result.push(String(numbers[idx]));
      }
    } else {
      result.push(String(numbers[idx]));
    }
  }

  return result;
}

console.log(shortHand("1,3,7,2,4,1")); // 1,3,7,12,14,21
// console.log(shortHand("1-3, 1-2")); // 1,2,3,11,12
// console.log(shortHand("1:5:2")); // 1,2,3,4,5,6, ...12
// console.log(shortHand("104-2")); // 104,105, ... 112
// console.log(shortHand("104-02")); // 104, 105, ...202
// console.log(shortHand("545, 64:11")); // 545,564,565, ..611

