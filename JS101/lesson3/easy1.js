// Lesson 3 - Practice Problems - Easy 1:
// Question 1:
let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers); // [1, 2, 3, < 3 empty items >, 5];
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?
console.log(numbers[4]); // undefined

// Question 2:
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
// My Solution:
function exclamationMark(string) {
  return string.split('')[string.length - 1] === '!';
}
console.log(exclamationMark(str1));
console.log(exclamationMark(str2));
// Lesson Solution:
console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));

// Question 3:
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(ages.hasOwnProperty('Spot'));

// Question 4:
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
// My Solution:
function capFirstLetter(string) {
  let sentenceArray = string.split(' ');
  let firstWord = sentenceArray.shift();

  let newFirstWord = firstWord[0].toUpperCase() +
   firstWord.substring(1, firstWord.length);

  let lowerCasedSentence = sentenceArray.map(word => word.toLowerCase());
  lowerCasedSentence.unshift(newFirstWord);

  return lowerCasedSentence.join(' ');
}
console.log(capFirstLetter(munstersDescription));
// Lesson Solution:
console.log(munstersDescription.charAt(0).toUpperCase() +
munstersDescription.substring(1).toLowerCase());

// Question 5:
console.log(false == '0'); // True
console.log(false === '0'); // False

// Question 6:
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);
console.log(ages);

// Question 7:
let str1 = "Few things in life are as important as house training
 your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

function checkForDino(string) {
  return string.includes('Dino');
}

console.log(checkForDino(str1));
console.log(checkForDino(str2));

// // Question 8:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
console.log(flintstones); // ["Fred", "Barney", "Wilma", "Betty", "Bambam",
//  "Pebbles", "Dino"];

// Question 9:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Happy");
console.log(flintstones); // ["Fred", "Barney", "Wilma", "Betty", "Bambam",
// "Pebbles", "Dino", "Happy"];

// Question 10:
let advice = "Few things in life are as important as house training your pet dinosaur.";
// Expected return value:
// => 'Few things in life are as important as '
let houseIndex = advice.indexOf('house');
console.log(advice.slice(0, houseIndex));
