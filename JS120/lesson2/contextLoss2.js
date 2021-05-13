// Dealing with Context Loss 2
// Nested Function Not Using the Surrounding Context
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar();
  },
};

obj.foo();        // => undefined undefined

// Solution 1 (Preserve Context with a Variable in the Outer Scope):
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;  // <--

    function bar() {
      console.log(self.a + ' ' + self.b);
    }

    bar();
  },
};

obj.foo(); // => hello world

// Solution 2: Call Inner Functions with Explicit Context
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar.call(this); // <--
  },
};

obj.foo(); // => hello world

// Solution 3: Use bind
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = function() {
      console.log(this.a + ' ' + this.b);
    }.bind(this); // <--

    // some code
    bar();

    // some more code
    bar();

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world

// Can also do this on a function expression (will need an extra variable):
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    let qux = bar.bind(this); // <-- 

    // some code
    qux();

    // some more code
    qux();

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world

// Solution 4: Using an Arrow Function:
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = () => {
      console.log(this.a + ' ' + this.b);
    }

    // some code
    bar();

    // some more code
    bar();

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world

// Note: Arrow functions inherit their execution context from the surrounding scope (similar to bind)
// As you don't have to worry about loss of scope with them (most common approach)
// Dont use arrow functions as methods --- they have unexpected context behaviour