// write a function that takes an integer, and prints out a diamond compose of "*" character whose
// width is equal to n

// Examples:

// Given n = 3
// *
//*** 
// *

// Given n = 5
//    *
//   ***
//  *****
//   ***
//    *

/*
- input: number
- output: string
Rules
  - write a function that takes an integer, and prints out a diamond composed of "*" character whose
  width is equal to n
Algorithm
- create starRepeat and set it to the input number
- create sideSpace and set it to the input number / 2
- create stars empty array
- create a loop that iterates while starRepeat > 0
  - on each round of iteration:
    - string is pushed into stars that consists of:
      - the a space repeated with sideSpace and a star repeated for the value of starRepeat
      - starRepeat - 1 on each round of iteration 
      - side space + 2 on each round of iteration
- once the loop has terminated create `starsReversed` and initialize it to a copy of stars reversed
- iterate over stars and starsReversed and console log each line on each round of iteration
 */ 

function star(width) {
  if (width === 1){
    console.log('*')
    return undefined;
  };

  let starRepeat = width;
  let sideSpace = starRepeat / 2;
  let stars = [];
  
  while(starRepeat > 0) {
    stars.push(`${' '.repeat(sideSpace)}${'*'.repeat(starRepeat)}`);
    starRepeat -= 2;
    sideSpace++;
  }

  let reversedStars = stars.slice(1).reverse();
  reversedStars.forEach(star => console.log(star));
  stars.forEach(star => console.log(star))
}

star(3);
star(5);