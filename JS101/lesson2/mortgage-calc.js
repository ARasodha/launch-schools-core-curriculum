/* Assignment: Mortgage / Car Loan Calculator

INFROMATION NEEDED:
- Loan Amount
- Annual Percentage Rate (APR)
- Loan Duration

NEED TO CALCULATE:
- Monthly Interest Rate
- Loan Duration in Months

FORMULA:
let m = p * (j / (1 - Math.pow((1 + j), (-n))));
m = montly payment
p = loan Amount
j = montly interest Rate
n = loan duration in Months

PSEUDOCODE:
- CREATE PROMPT FUNCTION
- CREATE INVALID NUMBER FUNCTION FOR NUMBER CHECKS
- GREET USER
- GET LOAN AMOUNT
- NUMBER CHECK WHILE LOOP AFTER GETTING ANY INFO (3 TIMES TOTAL)
- CREATE VARS ANNUAL INEREST RATE, MONTLY INTEREST RATE, MONTHS
- CALCULATE MONTHLY PAYMENT & RETURN STATEMENT
- ASK FOR ANOTHER CALCULATION
- WHILE LOOP & LOGIC FOR ANOTHER CALCULATION OPTION
*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalid(number) {
  return number.trim() === '' ||
    Number(number) < 0 ||
    Number.isNaN(Number(number));
}

prompt('Welcome to the Mortgage Calculator?');

prompt('-------------------------------------------');

while (true) {
  prompt('What is your current loan amount?');
  let amount = readline.question();
  while (isInvalid(amount)) {
    prompt('Please enter a valid number.');
    amount = readline.question();
  }

  prompt('What is your interest rate? ');
  prompt('For example, if it is five percent, enter 5');
  let interestRate = readline.question();
  while (isInvalid(interestRate)) {
    prompt('Please enter a valid number.');
    interestRate = readline.question();
  }

  prompt('How many years is your loan duration?');
  let years = readline.question();
  while (isInvalid(years)) {
    prompt('Please enter a valid number.');
    years = readline.question();
  }

  let annualInterestRate = Math.floor(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Math.floor(years) * 12;

  let monthlyPayment = amount * (monthlyInterestRate / (1 - Math.pow(
    (1 + monthlyInterestRate), (-months))));

  prompt(`Your monthly payment is: ${monthlyPayment.toFixed(2)}`);

  prompt('Make another calculation?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter either "y" or "n"');
    answer = readline.question().toLowerCase();
  }


  if (answer[0] === 'n') break;
}
