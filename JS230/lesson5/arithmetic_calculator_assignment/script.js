// My Solution:
// Arithmetic Calculator
// 1. When DOMContentLoaded — create firstNumber and secondNumber and init both to their respective elements with their id
// 2. Create submitBtn and init to the button with the type submit
// 3. Create operator and init to the value of the select element
// 4. Create result and init undefined
// 5. AddEventListener to submitBtn and list for “click”. Inside callback,
//     1. Prevent default submit behavior
//     2. If operation === + — reassign result to firstNumber + secondNumber
//     3. If operation … repeat for operators -, *, /
// 6. Reassign the innerHTML of h1 to result
document.addEventListener("DOMContentLoaded", event => {
  let result = document.getElementById("result");
  let form = document.querySelector('form');

  form.addEventListener("submit", event => {
    event.preventDefault();

    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);
    let operator = document.getElementById("operator").value;

    switch (operator) {
      case '+':
        result.textContent = num1 + num2;
        break;
      case '-':
        result.textContent = num1 - num2;
        break;
      case '*':
        result.textContent = num1 * num2;
        break;
      case '/':
        result.textContent = num1 / num2;
        break;
    } 

  });
});


// Lesson Solution:
document.addEventListener("DOMContentLoaded", function() {
  const Calculate = {
    "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
    "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
    "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
    "/": (firstNumber, secondNumber) => firstNumber / secondNumber,
  };

  let form = document.querySelector("form");
  const getValueOf = (selector) => form.querySelector(selector).value;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstNumber = +getValueOf("#first-number");
    let secondNumber = +getValueOf("#second-number");
    let operator = getValueOf("#operator");

    let calculate = Calculate[operator];
    let answer = calculate(firstNumber, secondNumber);
    document.querySelector("#result").textContent = String(answer);
  });
});