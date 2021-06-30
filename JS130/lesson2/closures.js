function add(first, second) {
  return first + second;
}

function makeAdder(firstNumber) {
  return function(secondNumber) {
    return add(firstNumber, secondNumber);
  }
}

let addFive = makeAdder(5);
let addTen = makeAdder(10);

console.log(addFive(3)); // 8
console.log(addFive(55)); // 60
console.log(addTen(3)); // 13
console.log(addTen(55)); // 65