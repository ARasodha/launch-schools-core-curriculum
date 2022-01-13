// An Example Problem: Comparing Version Numbers
// Lesson Walk Through
/*
- Input: two version numbers in string representation, version1 and version2
- Output: one of the numbers from 1, 0, and -1; or null for invalid inputs
Rules
- if any inputs contain invalid characters, return null
  - any characters other than digits and . are considered invalid
- Compare the two input versions
  - if version1 > version2, return 1
  - if version1 < version2, return -1
  - if version1 === version2, return 0
- The rules to compare two version numbers
  - start from the left most parts of the two version numbers
  - if the number part of the first version number is larger, then the first version number is larger
  - if the number part of the second version number is larger, then the first version number is smaller
  - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
    - do the same comparison and decide which version number is larger
    - keep moving to the right until the result of the comparison is determined
      - if we reach the end of only one number, pad that number with a 0 part
      (previous point was added after test-cases were created)
    - if we get to the last number part of the two version numbers and they're equal,
      then the two version numbers are equal
Examples and Test Cases
- 1.a is not a valid version          // we only want to deal with numbers and dots
- .1 and 1. are not valid versions    // versions must begin and end with a number
- 1..0 is not a valid version         // dots can only appear between two numbers
- 1.0 and 1.0.0 are equal to 1        // zeros can be inferred but are not always shown
- 1.0.0 is less than 1.1              // can handle version numbers with different lengths
- 1.0 is less than 1.0.5              // can handle version numbers with different lengths
(actual test cases moved bellow code)
Data Structures
- key operations:
  - iterate through the version numbers, part by part
  - compare part numbers
- Array of Numbers
Algorithms
- our goal:
  - convert the input data into our data structure of choice
  - express steps to produce outputs, using methods and abstractions available on the data structure
- return null if the inputs contain any characters other than digits and dots
- split the input numbers into parts as arrays of integers
- loop through the two version numbers' parts
  - for each step, access one part from each version number
  - if one version number runs out of parts, use 0
  - compare the two parts
    - if part1 < part2
      - return -1
    - if part1 > part2
      - return 1
    - if part1 === part2
      - we move to the next pair of parts
- when we reach the end of the loop, return 0
*/

// Code
function compareVersions(versionA, versionB) {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);
  let maxLength = Math.max(aParts.length, bParts.length);

  for (let i = 0; i < maxLength; i += 1) {
    let aValue = aParts[i] || 0;
    let bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}

// Test Cases
console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
