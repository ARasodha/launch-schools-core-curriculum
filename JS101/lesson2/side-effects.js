
// side effect: logs output to the console
// returns: undefined

function displayTotal(num1, num2) {
  console.log(num1 + num2);
}

displayTotal(1, 2);


// side effect: mutates the passed-in array
// returns: updated array

function append(targetArr, valueToAppend) {
  targetArr.push(valueToAppend);
  return targetArr;
}

console.log(append([1,2,3]), 1);


// side effect: none
// returns: a new number

function computeTotal(num1, num2) {
  return num1 + num2;
}
console.log(computeTotal(1,2));
