// Hoisting and the var Statement
let foo = 86;
console.log(global.foo)

var bar = 42;
console.log(global.bar)

function foo() {
  if (true) {
    var a = 1;
  }

  console.log(a);
}

foo();