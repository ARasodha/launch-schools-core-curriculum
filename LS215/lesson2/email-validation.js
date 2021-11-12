// Email Validation
/*
Input: string
Output: boolean
Rules
- implement a function that checks whether an email address is valid
- an email address has two parts: a "local part" and "domain part"
  - the domain part is the domain name (e.g., gmail.com) which contains a server
  name (sometimes called the mail server name) and a top-level domain (ex: .com)
- use the following criteria to determine whether an email address is valid
  - there must be one @ sign
  - the local part must contain one or more letters (A-Z, a-z) and/or digits (0-9)
    - it may contain any other characters
    - the domain part must contain two or more componenets with a single dot (.)
    between each component. Each component must contain one or more letters
    (A-Z a-z) only
- to keep things simple, you don't need to check whether the domain part or top
level domain is "real" or "official"
- note: don't use this criteria for real email validation logic -- this is simplified
for to concentrate on the fundamentals of JavaScript, and on the specifics of email
addresses
Algorithm
- 
*/

function isValidEmail(email) {
  return !!email.match(/^([A-Z0-9]+)@[A-Z]+(\.{1}[A-Z]+){1,}\b/i);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false