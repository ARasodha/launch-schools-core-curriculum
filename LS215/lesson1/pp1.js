// Practice Problem 1: Total Square Area
// Problem 1
/*
Input: array of nested arrays
Output: number
Rules
- write a function named `totalArea` that takes an array of rectangles represented
as an array with a length and height value
- return the total area covered by all the rectangles
Algorith
- use reduce method to add sums of nested reduce prodcuts
- return outer reduce method sum
*/
// My Solution
function totalArea(rectangles) {
  return rectangles.reduce((accum, rectangle) => {
    return accum + rectangle.reduce((accum, val) => accum * val);
  }, 0);
}

// Lesson Solution
function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, area) => sum + area);
}

// Test
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles));    // 141


// Problem 2:
/*
Input: array if nested arrays
Output: numbers
Rules
- write a function `totalSquareArea` that takes returns the sum of the areas of 
each individual square.
- only include the areas of squares, ignore rectangles
Algorithm
- create helper function `isSquare` that returns true if the height and width
are the same and false if they are not 
- create main function, calculate and return total area of the squares
*/
// My Solution
function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => isSquare(rectangle));
  return squares.reduce((accum, square) => {
    return accum + square.reduce((accum, val) => accum * val);
  }, 0);
}

function isSquare(rectangle) {
  return rectangle[0] === rectangle[1];
}

// Lesson Solution
function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  let areas = squares.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, area) => sum + area);
}

// Test
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalSquareArea(rectangles));    // 121