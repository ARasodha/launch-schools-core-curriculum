// Matching Parentheses
/*
Input: string
Output: boolean
Rules
- write a function that takes a string as an argument and returns `true` if the
string contains properly balanced properties
- it returns `false` otherwise
- parentheses are properly balanced only when '(' and ')' occur in matching pairs,
with each pair starting with '('
Algorithm
- create count variable and set it to 0
- iterate over input string and on each round of iteration
  - if the char is a closing bracket and count is divisble by 0 return false
  - if the char is an 
*/
function isBalanced(string) {
  let count = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === '(') { 
      count++;
    } else if (string[idx] === ')') {
      count--;
    }
    
    if (count < 0) return false;
  }

  return count === 0; 
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false