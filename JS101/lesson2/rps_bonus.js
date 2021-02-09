/* Task Breakdown:
- Build Rock, Paper, Scissors, Lizard, Spock
- Enter letter instead of entire word of move ex: r for Rock
- Allow the player to play best of 5
 */
const readline = require('readline-sync');
// KEY BEATS BOTH VALUES
const WINNING_COMBOS = {
  rock: ['lizard', 'scissors'],
  paper: ['spock', 'rock'],
  scissors: ['lizard', 'paper'],
  lizard: ['spock', 'paper'],
  spock: ['rock', 'scissors']
};
// VALID CHOICES === WINNING COMBINATION OBJECTS KEYS
const VALID_CHOICES = Object.keys(WINNING_COMBOS);
const BEST_OF_NUMBER = 5;
// LOGIC TO SEE WHO WINS BASED ON USER AND CPU CHOICE & COMPARING TO WIN COMBOS
function getWinner(userChoice, computerChoice) {
  prompt(`You chose: ${userChoice}, the computer chose ${computerChoice}`);
  if (WINNING_COMBOS[userChoice].includes(computerChoice)) {
    prompt('You win!\n');
    return 'player';
  } else if (WINNING_COMBOS[computerChoice].includes(userChoice)) {
    prompt('Computer wins!\n');
    return 'computer';
  } else {
    prompt('It is a tie!\n');
    return 'tie';
  }
}
// PROMPT ARROW FOR NICE LOGS IN CONSOLE
function prompt(message) {
  console.log(`=> ${message}`);
}
// GET WINNER FUNCTION RETURNS THE WINNER AND ADJUST SCORE MATCHES IT AND
// INCREMENTS THE WINNER BY 1
function adjustScore(winner, scores) {
  if (winner === 'player') {
    scores['player']++;
  } else if (winner === 'computer') {
    scores['computer']++;
  } else if (winner === 'tie') {
    scores['ties']++;
  }
}
// OBTAINS USERS CHOICE AND TAKES VALID_CHOICES ARRAY
// USER CAN ENTER WORD OF CHOICE OR JUST FIRST LETTER
// IF THERES MORE THAN ONE OPTION THE LOOP WILL PROMPT THE
// OPTIONS THAT MEET THE LETTER ENTERED AND OFFER A NEW SELECTION
function getUserChoice(availableChoices) {
  while (availableChoices.length > 1) {
    prompt(`Choose one: ${availableChoices.join(', ')}`);
    prompt('You can enter the entire word or just the first letter. Example: "r" for Rock');
    let choice = readline.question().toLowerCase();
    let filteredChoices = availableChoices.filter(item => {
      return item.substring(0, choice.length) === choice;
    });

    if (filteredChoices.length === 0) {
      prompt('Invalid selection please try again.\n');
    } else if (filteredChoices.length > 1) {
      prompt('Please be more specific.\n');
      availableChoices = filteredChoices;
    } else {
      availableChoices = filteredChoices;
    }
  }
  return availableChoices[0];
}
// VISUAL FOR ROUND NUMBER
function displayRound(round) {
  console.log('=========================');
  console.log(`     ROUND ${round}      `);
  console.log('=========================');
  if (round === 1) {
    prompt('To win you must win the majority games out of 5.');
  }
}
// VISUAL FOR FINAL WINNER
function displayFinalScore(winner, scores) {
  console.log('=========================');
  console.log(`    WINNER: ${winner}    `);
  console.log('=========================');
  console.log(`Player Score: ${scores['player']} -- Computer Score: ${scores['computer']}`);
  console.log(`Number of ties: ${scores['ties']}`);
  console.log('\n\n');
}
// ASK THE USER IF THEY WANT TO PLAY AGAIN
function playAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter either "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer !== 'y';
}
// MAIN BODY OF GAME - WHILE LOOP
while (true) {

  let scores = {
    player: 0,
    computer: 0,
    ties: 0
  };
  let numberOfRounds = 0;
  console.clear();
  prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
  while (numberOfRounds < BEST_OF_NUMBER) {
    displayRound(numberOfRounds + 1);
    let choice = getUserChoice(VALID_CHOICES);

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    let winner = getWinner(choice, computerChoice);
    adjustScore(winner, scores);
    numberOfRounds++;
  }

  if (scores['computer'] < scores['player']) {
    displayFinalScore('player', scores);
  } else {
    displayFinalScore('computer', scores);
  }
  if (playAgain()) break;
}
