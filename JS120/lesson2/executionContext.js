// Execution Context
// Function Execution Context (Implicit)
function foo() {
  console.log('this refers to : ' + this);
}
console.log(foo()); // logs this refers to: [object global] 
// using this in a function refers to the global object

// ex: can mutate the global object
function foo() {
  this.bar = 'bar';
}
foo();
console.log(global.bar); // 'bar

// Strict Mode Enabled sets `this` implicitly to undefined instead of the global object
'use strict'; // quotes are required
function foo() {
  console.log('this refers to: ' + this);
}
console.log(foo()); // logs this refers to: undefined

// Method Execution Context (Implicit)
let foo = {
  bar: function() {
    console.log(this);
  }
};
console.log(foo.bar()); // logs {bar: [Function: bar]} 
// 'foo' is the implicit execution context for 'bar'

// We can call the same method like so since JS functions are first class functions
let baz = foo.bar
console.log(baz()); // logs Object [global] {...}

// ** IMPORTANT: CONTEXT DEPENDS ON HOW YOU CALL THE FUNCTION OR METHOD NOT WHERE IT IS CALLED **
// Therefore, the two snippets above return different context even though its the same function 
// One is a method call, the other is a stand alone function (different context)

// Explicit Function and Method Context
// Explicit Execution Context with `call`
function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42,
};
logNum.call(obj); // logs 42 -- the context is provided explicitly as a new object

// This code works the same as the follow code (except the following mutates the object):
function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

obj.logNum = logNum;
obj.logNum(); // logs 42 -- mutates the object that we are using for context

// Call can be used to explicitly set execution context on methods too, not just function
let obj1 = {
  logNum() {
    console.log(this.num);
  }
};

let obj2 = {
  num: 42
};

obj1.logNum.call(obj2); // logs 42 -- sets the execution to obj2 instead of obj1

// The behavior of this is the same as the following code (except the following mutates obj2):
let obj1 = {
  logNum() {
    console.log(this.num);
  }
};

let obj2 = {
  num: 42
};

obj2.logNum = obj1.logNum;
obj2.logNum(); // 42 -- this way mutates obj2
console.log(obj2);

// What if we want to provide arguments to our function? 
function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

console.log(sumNum.call(obj, 5)); // 47 -- just add a comma and provide the arguments to the call method
// Can add as many arguments as needed to the call method

//Explicit Execution Context with `apply`
// Similar to `call` but uses an array to pass any arguments to the function
// Both syntaxes in comparison:
// someObject.someMethod.call(context, arg1, arg2, arg3, ...) // call
// someObject.someMethod.apply(context, [arg1, arg2, arg3, ...]) // apply

// *** REMEMBER: EXECUTION CONTEXT IS DETERMINED BY HOW YOU INVOKE A FUNCTION OR METHOD *** 