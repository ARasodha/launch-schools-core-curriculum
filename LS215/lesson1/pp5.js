// Practice Problem 5:
/*
Input: array of objects
Output: array of objects
Rules
- write a function that can process the input band array and return an array
that contains the fixed information:
  - the band countries are wrong: all the bands should have 'Canada' as the country
  - the band name should have all words first letter capitalized
  - remove all dots from the band names
Algorithm
- create helper function `removeDots`
- iterate over input array and on each round of iteration
  - reassign the name property to the value at the name property passed into 
  `removeDots` helper function and the result capitalized
  - reassign the country to 'Canada'
- return the array with the fixed objects
*/
// My Solution
function processBands(bands) {
  bands.forEach(band => {
    band.name = capFirstLetter(removeDots(band.name));
    band.country = 'Canada';
  });

  return bands;
}

function removeDots(string) {
  return string.split('').filter(char => char != '.').join('');
}

function capFirstLetter(sentence) {
  return sentence.split(' ').map(word => word[0]
                  .toUpperCase() + word.slice(1)).join(' ');
}

// Test
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
