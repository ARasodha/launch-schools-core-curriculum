// Extra Practice
// Hard 1 - Question 3:
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
