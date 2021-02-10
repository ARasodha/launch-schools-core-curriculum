// function foo1(a) {
//   return 2 * a;
// }
//
// let foo2 = function(a) {
//   return 2 * a;
// };
//
// const foo3 = a => 2 * a;
//
// // create a random integer between 0 and 9
// let randomNumber = Math.floor(10 * Math.random());
//
// console.log(foo1(randomNumber));
// console.log(foo2(randomNumber));
// console.log(foo3(randomNumber));

// leta = 1;
// a = 2;
// console.log(leta);
// console.log(a);

  console.log(foo());

  function foo() {
    console.log('Waiting for bar!');
  }

  function foo() {
    console.log(foo);
    function bar() {
      console.log('bar again');
    }

    bar();

    function bar() {
      console.log('bar again and again');
    }
  }
