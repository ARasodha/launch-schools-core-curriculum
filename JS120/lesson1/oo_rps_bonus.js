const readline = require('readline-sync');

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, lizard or spock:');
        choice = readline.question();
        if (playerObject.moveOptions.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
      this.moveHistory.push(choice);
    }
  };

  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    lossHistory: [],
    weightedChoices: playerObject.moveOptions.concat(playerObject.moveOptions, playerObject.moveOptions),
    choose() {
      let randomIndex = Math.floor(Math.random() * this.weightedChoices.length);
      this.move = this.weightedChoices[randomIndex];
      this.moveHistory.push(this.move);
    },

    adjustWeighting(move) {
      if (this.countValues(move, this.lossHistory) > 1 && 
        this.countValues(move, this.weightedChoices) > 1) {
          let moveIndex = this.weightedChoices.indexOf(move);
          this.weightedChoices.splice(moveIndex, 1);
        }
    },

    countValues(val, arr) {
      return arr.filter(elem => elem === val).length;
    }
  };

  return Object.assign(playerObject, computerObject);
}

function createPlayer() {
  return {
    move: null,
    moveOptions: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
    score: 0,
    moveHistory: [],
  };
}

// Orchestration Engine
const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  maxScore: 5,
  roundNumber: 1,
  roundWinner: null,
  maxMoveLength: 8, //Math.max(...this.human.moveOptions.map(elem => elem.length)),

  winningCombos: {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['rock', 'scissors']
  },

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Lizard, Spock. Goodbye!');
  },

  displayChoices() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
  },
  
  determineRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if (this.winningCombos[humanMove].includes(computerMove)) {
      this.human.score++;
      this.roundWinner = 'human';
    } else if (humanMove === computerMove) {
      this.roundWinner = 'tie';
    } else {
      this.computer.score++;
      this.roundWinner = 'computer';
    }
  },

  displayRoundWinner() {
    switch (this.roundWinner) {
      case 'human':
        console.log(`You win round ${this.roundNumber}!`);
        break;
      case 'computer':
        console.log(`The computer won round ${this.roundNumber}!`);
        break;
      case 'tie':
        console.log(`Round ${this.roundNumber} is a tie.`);
    }
    console.log('Press Enter to Continue.');
    readline.question();
    console.clear();
  }, 
  
  displayScores() {
    console.log(`Your score: ${this.human.score}`);
    console.log(`Computer score: ${this.computer.score}`);
  },

  roundDisplay() {
    console.log(`-----ROUND ${this.roundNumber}-----`);
  },
  
  displayMatchWinner() {
    if (this.human.score > this.computer.score) {
      console.log(`You got ${this.human.score} points, you win the match!`);
    } else {
      console.log(`The computer got ${this.computer.score} points, you loose the match!`);
    }
  },

  historyPrompt() {
    console.log('Would you like to see the match history? (y/n)');
    let answer = readline.question().toLowerCase();
    if (answer[0] !== 'y') return;

    console.log('     YOU    CPU');
    for (let moveIdx = 0; moveIdx < this.human.moveHistory.length; moveIdx++) {
      let humanMove = this.human.moveHistory[moveIdx];
      let computerMove = this.computer.moveHistory[moveIdx];
      let compare = this.historyComparison(humanMove, computerMove);

      console.log(`${' '.repeat(this.maxMoveLength - humanMove.length) + humanMove} ${compare} ${computerMove}`);
    }
  },

  historyComparison(humanMove, cpuMove) {
    if (this.winningCombos[humanMove].includes(cpuMove)) {
      return '->';
    } else if (humanMove === cpuMove) {
      return '==';
    } else {
      return '<-';
    }
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  resetGame() {
    this.roundNumber = 1;
    this.human.score = 0;
    this.computer.score = 0;
    this.human.moveHistory = [];
    this.computer.moveHistory = [];
    console.clear();
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      while (this.human.score < this.maxScore && this.computer.score < this.maxScore) {
        this.roundDisplay();
        this.human.choose();
        this.computer.choose();
        this.displayChoices();
        this.determineRoundWinner();
        this.displayRoundWinner();
        this.computer.adjustWeighting(this.computer.move);
        this.displayScores();
        this.roundNumber++;
      }

      this.displayMatchWinner();
      this.historyPrompt();
      if (!this.playAgain()) break;
      this.resetGame();
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
