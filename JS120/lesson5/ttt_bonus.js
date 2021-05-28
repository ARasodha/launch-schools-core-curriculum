const readline = require('readline-sync');

class Square {
  static UNUSED_SQUARE = ' ';
  static HUMAN_MARKER = 'X';
  static COMPUTER_MARKER = 'O';

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    return this.reset();
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}`);
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.isUnusedSquare(key));
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

  clearAndDisplay() {
    console.clear();
    this.display();
  }

  reset() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter++) {
      this.squares[counter] = new Square();
    }
  }

  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  }

}

class Player {
  constructor(marker) {
    this.marker = marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  static POSSIBLE_WINNING_COMBOS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ]

  static joinOr(array, splitter, word) {
    switch (array.length) {
      case 1: return array[0];
      case 2: return `${array[0]} ${word} ${array[1]}`;
      default: return `${array.slice(0, array.length - 1).join(splitter)}${splitter}${word} ${array[array.length - 1]}`;
    }
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.playOnce();
      if (this.playAgain()) break;
      console.clear();
      this.board.reset();
      console.log("Let's play again!");
    }

    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.log('Welcome to Tic Tac Toe!');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tac Toe! Goodbye!');
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices, ", ", 'or')}): `;

      choice = readline.question(prompt);
      if (validChoices.includes(choice)) break;

      console.log('Sorry, that is not a valid choice.');
      console.log('');
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let choice = this.intelligentComputerMoves(this.human);

    if (!choice) {
      choice = this.intelligentComputerMoves(this.computer);
    } 
    
    if (!choice) {
      choice = this.chooseCenterSquare();
    }

    if (!choice) {
      choice = this.chooseRandomSquare();
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log('Congratulations! You won!');
    } else if (this.isWinner(this.computer)) {
      console.log('I won! I won! Take that, human!');
    } else {
      console.log('A tie game. How boring.');
    }
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_COMBOS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }
  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }
  
  playAgain() {
    let answer;
    while (true) {
      answer = readline.question('Would you like to play again? (y/n) ');
      if (['y', 'n'].includes(answer.toLowerCase())) break;

      console.log('Please enter either "y" or "n": ');
    }

   return answer === 'n'
  }

  playOnce() {
    this.board.display();
    while (true) {

      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.clearAndDisplay();
    }

    this.board.clearAndDisplay();
    this.displayResults();
  }

  intelligentComputerMoves(player) {
    for (let idx = 0; idx < TTTGame.POSSIBLE_WINNING_COMBOS.length; idx++) {
      let row = TTTGame.POSSIBLE_WINNING_COMBOS[idx];
      let key = this.openSquare(row, player);

      if (key) return key;
    }

    return null;
  }

  openSquare(row, player) {
    if (this.board.countMarkersFor(player, row) === 2) {
      let index = row.findIndex(key => this.board.isUnusedSquare(key));
      if (index >= 0) return row[index];
    }

    return null;
  }

  chooseCenterSquare() {
    return this.board.isUnusedSquare('5') ? '5' : null;
  }

  chooseRandomSquare() {
    let validChoices = this.board.unusedSquares();
    let choice;
    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    return choice;
  }
}

let game = new TTTGame();
game.play();