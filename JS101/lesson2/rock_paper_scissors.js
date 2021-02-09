// My Solution:

const readline = require('readline-sync');
const MOVES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function determineWinner(userMove, cpuMove) {
  let winnerMessage;
  if ((userMove === 'rock' && cpuMove === 'scissors') ||
    (userMove === 'paper' && cpuMove === 'rock') ||
    (userMove === 'scissors' && cpuMove === 'paper')) {
    winnerMessage = 'User Wins!';
  } else if (userMove === cpuMove) {
    winnerMessage = 'This round is a tie!';
  } else {
    winnerMessage = 'CPU wins!';
  }
  return winnerMessage;
}

prompt('Welcome to the Rock, Paper, Scissors game!');

prompt('----------------------------------------------');

while (true) {

  prompt('Choose rock, paper or scissors.');
  let userMove = readline.question().toLowerCase();
  while (!MOVES.includes(userMove)) {
    prompt('Please enter either rock, paper or scissors.');
    userMove = readline.question().toLowerCase();
  }
  prompt(`Your Move: ${userMove}`);

  let randomNum = Math.floor(Math.random() * 3);
  let cpuMove = MOVES[randomNum];
  prompt(`CPU Move: ${cpuMove}`);

  prompt(`${determineWinner(userMove, cpuMove)}`);

  prompt('Play Again? ("y" or "n")');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter either "y" or "n"');
    answer = readline.question().toLowerCase();
  }


  if (answer[0] === 'y') break;
}
