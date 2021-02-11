// Lesson 3 - Practice Problems - Medium 1:
// Question 1:
// My Solution:
let string = 'The Flintstones Rock!';
for (let idx = 1; idx <= 10; idx++) {
  console.log(string.padStart(idx + string.length));
}
// Lesson Solution:
for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + 'The Flintstones Rock!');
}

// Question 2:
let munstersDescription = "The Munsters are creepy and spooky.";
// My Solution:
function switchCase(string) {
  let lettersArray = string.split('');
  let resultArray = [];
  for (let idx = 0; idx < string.length; idx++) {
    if (lettersArray[idx] === lettersArray[idx].toLowerCase()) {
      resultArray.push(lettersArray[idx].toUpperCase());
    } else if (lettersArray[idx] === lettersArray[idx].toUpperCase()) {
      resultArray.push(lettersArray[idx].toLowerCase());
    }
  }
  return resultArray.join('');
}
console.log(switchCase(munstersDescription));
// Lesson Solution:
munstersDescription = munstersDescription.split('').map(char => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join('');
console.log(munstersDescription);

// Question 3:
// My Solution:
function factors(number) {
  let result = [];
  for (let idx = 0; idx <= number; idx++) {
    if (number % idx === 0) {
      result.push(idx);
    }
  }
  return result;
}
console.log(factors(10));
/* Bonus: The purpose for number % divisor in the lesson algorithm
is to find a integer factor of the input number. */
// Lesson Solution:
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor--;
  }
  return factors;
}
console.log(factors(10));

// Question 4:
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
let buff = [1, 2, 3, 4];
let maxSize = 4;
let newElem = 5;

console.log(addToRollingBuffer1(buff, maxSize, newElem));
console.log(addToRollingBuffer2(buff, maxSize, newElem));

// Question 5:
console.log(0.3 + 0.6); // 0.899999999
console.log(0.3 + 0.6 === 0.9); // False

// Question 6:
let nanArray = [NaN];
console.log(nanArray[0] === NaN); // false
// Bonus (My Solution): Can check if value is NaN like so:
function isNaN(x) {
  return x !== x;
}
console.log(isNaN(NaN)); // true
// Bonus (Lesson Solution):
console.log(Number.isNaN(nanArray[0]));

// Question 7:
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); // 34

// Question 8:
let munsters = {
  Herman: {
    age: 32,
    gender: "male"
  },
  Lily: {
    age: 30,
    gender: "female"
  },
  Grandpa: {
    age: 402,
    gender: "male"
  },
  Eddie: {
    age: 10,
    gender: "male"
  },
  Marilyn: {
    age: 23,
    gender: "female"
  }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
messWithDemographics(munsters);
console.log(munsters);
/* The family data got mutated by invoking the messWithDemographics function.
However, removing the invocation will solve this. If demoObject pointed to a new
object in the function it would not have mutated the munsters object. */

// Question 9:
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
// paper wins

// Question 10:
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
console.log(bar(foo())); //no
