// Practice Problems: Implicit and Explicit Function Execution Contexts
// Exercise 1:
function func() {
  return this;
}

let context = func();

console.log(context); // Object [global] {...}
// Explanation: since line 7 calls func as a function, the implicit context for func is the global obj
// If this was in the browser it would have been `window`

// Exercise 2:
let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();

console.log(context); // {func: [Function: func]}
// Explanation: This is a method invocation, and the method is being invoked on the calling object.
// therefore the context is implicitly set to the calling object

// Exercise 3:
message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();
// logs 'Hello from the global scope!' and 'Hello from the function scope!'
// Explanation: On line 33 the deliverMessage function is invoked with the message in the global 
// context. On line 39 the object foo invokes the deliverMessage method with the message inside the 
// object because the context is the calling object

// Exercise 4:
// call and apply are two built in methods that we have learned about that we can use to specify a
// functions execution context explicitly

// Exercise 5:
let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

console.log(bar.add.call(foo)); // 3