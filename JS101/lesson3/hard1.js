// Lesson 3 - Practice Problems - Hard 1:
// Question 1:
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return {
    prop1: "hi there"
  };
}

console.log(first()); // will return the prop1 array
/* console.log(second()); // will return undefined, return statment is
 on its own line */

// Question 2:
let object = {
  first: [1]
};
let numArray = object["first"];
numArray.push(2);
console.log(numArray); //  => "[1, 2]"
console.log(object); // { first [1, 2] } - because objects are pointed by ref
/* If we didnt want to mutate the original we could use slice to copy the array
concat to return a new array */
let object = {
  first: [1]
};
let numArray = object["first"].slice();
numArray.push(2);
//OR
let object = {
  first: [1]
};
let numArray = object["first"].concat();
numArray.push(2);

// Question 3:
//A
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is: one
console.log(`two is: ${two}`); // two is: two
console.log(`three is: ${three}`); // three is: three

//B
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is: one
console.log(`two is: ${two}`); // two is: two
console.log(`three is: ${three}`); // three is: three

//C
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is two
console.log(`two is: ${two}`); // two is three
console.log(`three is: ${three}`); // three is one

// Question 4:
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('1.2.3.4')); // True
console.log(isDotSeparatedIpAddress('1.2.3.4.5')); // False
