// Practice Problems: Object Prototypes:
// Exercise 1:
let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo); // 2
// Explanation: The property foo in qux has the value of 1. The qux object is a prototype to baz,
// therefore baz has access to the foo property. 1 + 1 = 2

// Exercise 2:
let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo); // 3
// Explanation: The foo property in baz is reassigned to 2 and is no longer in relation to the foo 
// property in its prototype qux. The foo property in qux therefore remains 1. 2 + 1 = 3

// Exercise 3:
let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo); // 4
// Explanation: The foo property in the prototype object of baz has its property foo reassigned to
// the value 2. Since the baz object inherits the foo property from qux, it also see's the reassigned
// value. Therefore 2 + 2 = 4

// Exercise 4:
// My Solution:
function assignProperty(object, property, newValue) {
  let firstProto = Object.getPrototypeOf(object);
  let secondProto = Object.getPrototypeOf(firstProto);
  if (secondProto.hasOwnProperty(property)) {
    secondProto[property] = newValue;
  }
}

// Book Solution (Iterative - works if there are an unknown amount of prototypes):
function assignProperty(obj, property, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    }

    obj = Object.getPrototypeOf(obj);
  }
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

// Exercise 5:
for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

// Explanation: These loops will not always log the same results because the for/in loop will also
// log to properties and values of its prototypes. The second snippet will not since it is extracting
// the properties only from the object it specifies and is iterating based on only those

// Exercise 6:
let bareObject = Object.create(null);
console.log(Object.getPrototypeOf(bareObject)); // null
// Explanation: You can create a object that does not have a prototype by using the Object.create
// method and passing in null as the argument.