// Object Prototypes 

let a = {
  foo: 1,
  bar: 2,
}

let b = Object.create(a);
console.log(a.hasOwnProperty('foo')); // true
console.log(b.hasOwnProperty('foo')); // false
console.log(Object.getPrototypeOf(a));

let b = {};
Object.setPrototypeOf(b, a);
console.log(b.foo); 
console.log(b);
console.log(Object.getPrototypeOf(b));

a.foo = 42;
console.log(b.foo);

a.baz = 12;
console.log(b.baz);
console.log(b);

let a = {a: 'apple'};
console.log(Object.getPrototypeOf(a));

// Object Iteration Review
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
}

for (let prop in person) {
  console.log(person[prop]);
}

let obj1 = {a: 1, b: 2};
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
}

// Prototype Chain
let a = {foo: 1};
let b = {bar: 2};
let c = {baz: 3};

Object.setPrototypeOf(c, b);
Object.setPrototypeOf(b, a);

console.log(c.bar);
console.log(c.foo);

// The proto Property
console.log(c.__proto__);

// Property look up in the property chain
let a = {foo: 1};
let b = {bar: 2};
Object.setPrototypeOf(b, a);
let c = Object.create(b);
c.foo = 42;
// console.log(c.foo);
console.log(b.hasOwnProperty('bar'));

// Useful methods on Object.prototype
let a = {foo: 1};
let b = Object.create(a);
console.log(a.toString());
console.log(a.hasOwnProperty('foo'));
console.log(a.isPrototypeOf(b));

// Object without Prototypes
let a = Object.create(null);
Object.getPrototypeOf(a); // null

function apple() {

}

console.log(apple.prototype);

let obj = {foo: 'baar'};
let b = Object.create(obj);
console.log(obj.__proto__ === Object.prototype);
console.log(obj.constructor);


function random(arg1, arg2) {
  return Object.values(arguments);
}

console.log(random('apples', 'bananas'));

console.log(Array.from(obj));