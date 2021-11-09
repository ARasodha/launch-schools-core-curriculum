// Practice Problem 4: 
/*
Input: string and array of strings
Output: array of strings
Rules
- write a function name `anagrams` that takes two arguments: a word an an array
of words
- return an array that contains all the words from the array argument that are 
anagrams of the word argument
- anagrams - two words with the exact same letters
Algorithm
- create helper function `sortWord` which sorts the word alphabetically
- created sortedWord and initialize it with the return value of sortWord with the 
argument word passed as an argument
- filter over the input array and pass each word to the sort function and if it's 
sorted form matches the sortedWord return it in the filtered array
- return the filtered array
*/
// My Solution
function anagram(word, list) {
  let sortedWord = sortWord(word);
  return list.filter(listWord => sortedWord === sortWord(listWord));
}

function sortWord(word) {
  return word.split('').sort().join('');
}

// Lesson Solution
function anagram(word, list) { 
  return list.filter(candidate => areAnagrams(candidate, word));
}

function areAnagrams(source, target) {
  let sourceLetters = source.split('').sort();
  let targetLetters = target.split('').sort();
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  if (array1.length !== array1.length) return false;
  return array1.every((letter, index) => letter === array2[index]);
}
// Tests
console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]