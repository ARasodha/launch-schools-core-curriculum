// Practice Problems: Strings
// Problem 1:
let firstName = 'Arjun';
let lastName = 'Rasodha';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Problem 2:
console.log(firstName.concat(lastName));

// Problem 3:
console.log(fullName.split(' '));

// Problem 4:
let language = 'JavaScript';
let idx = language.indexOf('S');
console.log(idx);

// Problem 5:
let charCode = language.charCodeAt(idx);
console.log(charCode);

// Problem 6:
console.log(String.fromCharCode(charCode));

// Problem 7:
console.log(language.lastIndexOf('a'));

// Problem 8:
let a = 'a';
let b = 'b';
console.log(a > b);
b = 'B';
console.log(a > b);

// Problem 9:
let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

// Problem 10:
console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

// Problem 11:
let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

// Problem 12:
console.log(fact1[0], fact2[0]);

// Problem 13:
let pi = (22 / 7).toString();
console.log(pi.lastIndexOf('14'));

// Problem 14:
let boxNumber = 365..toString();
console.log(boxNumber);

// Problem 15:
boxNumber = parseInt(boxNumber);
console.log(typeof boxNumber);
boxNumber = String(boxNumber);
console.log(typeof boxNumber);

// Problem 16: (browers console program)
let name = prompt('What your name?');

if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, -1)} WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}