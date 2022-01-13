// Problem 3
/*
Input: string
Output: boolean
Rules
- a collection of spelling blocks has two letters per block
- this limits the words you can spell with the blocks to only those words that do not use both
letters from any given block
- you can also only use each block once
- write a function that takes a word string as an argument and returns `true` if the word can be 
spelled using the set of blocks, or `false` otherwise. 
- you can consider the letters to be case-insensitive when you apply the rules
- blocks:
  - B:O   X:K   D:Q   C:P   N:A
    G:T   R:E   F:S   J:W   H:U
    V:I   L:Y   Z:M 
Test Cases
- 'BATCH' => true
- 'BUTCH' => false
- 'jest' => true
Data Structure
- object to hold blocks as they key and number 1 if used, 0 if not used
Algorithm
- create blocks object that has a block as an string with both letters in it as the key (uppercase)
and 0 as the default value
- create blockKeys and set it to the keys from the blocks object
- set the input string to uppercase, split it into an array of letters and on each round of
iteration:
  - iterate over the blockKeys and increment the value for that key in blocks by 1 and continue
   to the next word
- when the loop terminates return a boolean based on if any of blocks value as greater than 1
*/
function isBlockWord(word) {
  let blocks = {
    'BO': 0,
    'XK': 0,
    'DQ': 0,
    'CP': 0,
    'NA': 0,
    'GT': 0,
    'RE': 0,
    'FS': 0,
    'JW': 0,
    'HU': 0,
    'VI': 0,
    'LY': 0,
    'ZM': 0,
  }

  let blockKeys = Object.keys(blocks);
  let capWord = word.toUpperCase();

  for (let idx = 0; idx < capWord.length; idx++) {
    let letter = capWord[idx];
    blockKeys.forEach(block => {
      if (block.includes(letter)) {
        blocks[block]++;
      }
    });
  }

  return !Object.values(blocks).some(num => num > 1);
}

// Test Cases
console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest')); // true
