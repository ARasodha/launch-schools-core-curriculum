// Lesson 4 Practice Problems:
// Extra Practice lesson 4 problems:
// 1:
console.log([1, 2, 3].filter(num => 'hi')); // [1, 2, 3]
// Filter looks for a truthy value and a string is one so it will resturn all
// elements in the array

//2:
console.log([1, 2, 3].map(num => {
  num * num;
})); // [undefined, undefined, undefined]
// There is no return statement within the block of the map callback Function.
// MAP outputs a new array and in this case it will be with undefined instead
// of each value in the array

//3:
console.log([1, 2, 3].map(num => num * num)); // [1, 4, 9]
// This code multiplies all elements in the array by itself and returns
// it in an a new array. This works because single line callback Functions
// with no curly braces doesn't require an explicit return word

//4:
console.log(['ant', 'bear', 'caterpillar'].pop().length); // 11
// The pop method removes the last value in an array and holds it
// in this case the code calls length on that value which outputs the amount of
// characters in the string 'caterpillar'

//5:
console.log([1, 2, 3].every(num => {
  return num = num * 2;
})); // 2, 4, 6 // true //  Will multiply each number by two and return true
// because numbers above 0 are truthy

//6:
let arr = [1, 2, 3, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arr.fill(1, 1, 5)); // [1, 1, 1, 1, 1]
console.log(arr); // [1, 1, 1, 1, 1]
// the fill method takes two index points and changes the value of all elements
// between the two. according to the documentation this is a destructive method
// the terminal confirms this

//7:
console.log(['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
})); // [undefined, 'bear']
// the first element does not meet the condition in the callback function so it
// returns undefined as the first element of the array. the second value does
// meet the condition so it returns normally

//8:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let object = {};
flintstones.forEach((name, index) => {
  object[name] = index;
});
console.log(object);

//9:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
//Solution w/ REDUCE:
console.log(Object.values(ages).reduce((accum, val) => accum + val, 0));
//Solution w/ FOREACH:
let totalAge = 0;
Object.values(ages).forEach(age => totalAge += age);
console.log(totalAge);

//10:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
let agesArray = Object.values(ages);
console.log(Math.min(...agesArray));

//11:
// Solution w/ FILTER and FOREACH:
let statement = "The Flintstones Rock";
let letterCount = {};
let characters = statement.split('').filter(char => char !== ' ');
characters.forEach(char => {
  letterCount[char] = letterCount[char] || 0;
  letterCount[char]++;
});
console.log(letterCount);
// Solution w/ FOR LOOP:
let letterCount = {};
for (let count = 0; count < statement.length; count++) {
  let char = statement[count];
  if (char === ' ') continue;
  letterCount[char] = letterCount[char] || 0;
  letterCount[char]++;
}
console.log(letterCount);
