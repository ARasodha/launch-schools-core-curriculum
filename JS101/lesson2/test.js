// Rock, Paper, Scissors, Lizard, Spock Extra Practice (RPS BONUS)
const readline = require('readline-sync');
const WINNING_COMBOS = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};
const VALID_CHOICES = Object.keys(WINNING_COMBOS);
const BEST_OF_NUMBER = 5;

function getWinner(userChoice, computerChoice) {
  prompt(`Your choice: ${userChoice} - Computer choice: ${computerChoice}`);
  if (WINNING_COMBOS[userChoice].includes(computerChoice)) {
    prompt('You Win!');
    return 'player';
  } else if (WINNING_COMBOS[computerChoice].includes(userChoice)) {
    prompt('Computer Wins!');
    return 'computer';
  } else {
    prompt('TIE!');
    return 'tie';
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function getUserChoice(availableChoices) {
  prompt(`Choose one of the following: ${VALID_CHOICES.join(', ')} `);
  prompt('You can either enter the entire word or just the first letter. Example: "r" for Rocky.');
  while (availableChoices.length > 1) {
    let choice = readline.question().toLowerCase();
    let filteredChoices = availableChoices.filter(item => {
      return item.substring(0, choice.length) === choice;
    });
    if (filteredChoices.length === 0) {
      prompt('Please enter a valid option.');
    } else if (filteredChoices.length > 1) {
      prompt('Please be more specific.');
      availableChoices = filteredChoices;
    } else {
      availableChoices = filteredChoices;
    }
  }
  return availableChoices[0];
}

function adjustScore(winner, scoreBoard) {
  if (winner === 'player') {
    scoreBoard['player']++;
  } else if (winner === 'computer') {
    scoreBoard['computer']++;
  } else if (winner === 'tie') {
    scoreBoard['tie']++;
  }
}

function displayRound(round) {
  console.log('=======================');
  console.log(`     ROUND ${round}    `);
  console.log('=======================');
}

function displayFinalScore(winner, scoreBoard) {
  console.log('=======================');
  console.log(`    WINNER ${winner}   `);
  console.log('=======================');
  prompt(`Your Score: ${scoreBoard['player']} - Computer Score: ${scoreBoard['computer']}`);
  prompt(`Number of Ties: ${scoreBoard['tie']}`);
}

function playAgain() {
  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== !'y') {
    prompt('Enter either "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer !== 'y';
}

while (true) {
  let scoreBoard = {
    player: 0,
    computer: 0,
    tie: 0
  };
  let roundNumber = 0;
  console.clear();
  prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!\n');
  while (roundNumber < BEST_OF_NUMBER) {
    displayRound(roundNumber + 1);
    let userChoice = getUserChoice(VALID_CHOICES);

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    let winner = getWinner(userChoice, computerChoice);
    adjustScore(winner, scoreBoard);
    roundNumber++;
  }
  if (scoreBoard['computer'] < scoreBoard['player']) {
    displayFinalScore('Player', scoreBoard);
  } else {
    displayFinalScore('Computer', scoreBoard);
  }
  if (playAgain()) break;
}
