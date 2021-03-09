const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];
const WINS_REQUIRED = 5;
const SQUARE_FIVE = '5';
const FIRST_MOVE = 'choose';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();
  prompt(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board), ', ', 'or')})`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt('Sorry that\'s an invalid option');
  }

  board[square] = PLAYER_MARKER;
}

// Refactored to make offensive move, defensive move, choose sq5, choose random
// in priortiy sequence
function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = findAtRiskSquare(board, COMPUTER_MARKER) ||
    findAtRiskSquare(board, PLAYER_MARKER) ||
    ifSquareFiveEmpty(board) ||
    emptySquares(board)[randomIndex];

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWonRound(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    if (
      board[sq1] === PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER &&
      board[sq3] === PLAYER_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

// Better Readability of Move Options
function joinOr(array, delimiter = ', ', word = 'or') {
  switch (array.length) {
    case 0:
      return ' ';
    case 1:
      return String(array[0]);
    case 2:
      return `${array[0]} ${word} ${array[1]}`;
    default:
      return `${array.slice(0, array.length - 1).join(delimiter)}${delimiter}${word} ${array[array.length - 1]}`;
  }
}

// INITIALIZE, DISPLAY AND UPDATE SCORE
function initializeScore() {
  let score = {
    player: 0,
    computer: 0
  };
  return score;
}

function displayScore(score) {
  prompt(`Player Score: ${score.player} | Computer Score: ${score.computer}`);
}

function updateScore(score, winner) {
  return score[winner]++;
}

// COMPUTER AI: DEFENCE
function findAtRiskSquare(board, player) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    let threeSquares = [board[sq1], board[sq2], board[sq3]];

    if (threeSquares.filter(occupied => occupied === player).length === 2 &&
      threeSquares.filter(empty => empty === INITIAL_MARKER).length === 1) {
      let square = WINNING_LINES[line][threeSquares.indexOf(INITIAL_MARKER)];
      return square;
    }
  }
  return null;
}

// CPU Should Select SQ5 Before Random Choice:
function ifSquareFiveEmpty(board) {
  return emptySquares(board).includes(SQUARE_FIVE) ? SQUARE_FIVE : null;
}

// CHOOSE WHO MAKES FIRST MOVE:
function determineFirstMove() {
  if (FIRST_MOVE === 'choose') {
    prompt('Please indicate who will make the first move: "player" or "computer"');
    let firstMove;

    while (true) {
      firstMove = readline.question().toLowerCase();
      if (['player', 'p', 'computer', 'c'].includes(firstMove)) break;
      prompt('That\'s an invalid Choice. Enter either "(p)layer" or "(c)omputer"');
    }
    return firstMove === 'player' || firstMove === 'p' ? PLAYER_MARKER : COMPUTER_MARKER;
  }
  return FIRST_MOVE === 'player' ? PLAYER_MARKER : COMPUTER_MARKER;
}

function chooseSquare(board, player) {
  if (player === PLAYER_MARKER) {
    return playerChoosesSquare(board);
  } else {
    return computerChoosesSquare(board);
  }
}

function alternatePlayer(player) {
  return player === PLAYER_MARKER ? COMPUTER_MARKER : PLAYER_MARKER;
}

// Play Again
function playAgain() {
  let answer;
  while (true) {
    prompt('Play Again? (y/n)');
    answer = readline.question();
    if (['y', 'n'].include(answer)) break;
  }
  return answer === 'y';
}

// GAME LOOP
while (true) {
  console.clear();
  prompt('Welcome to Tic Tac Toe!');
  prompt(`First to ${WINS_REQUIRED} wins!`);
  let score = initializeScore();

  let currentPlayer = determineFirstMove();
  let storeFirstPlayer = currentPlayer;

  while (true) {
    let board = initializeBoard();
    currentPlayer = storeFirstPlayer;

    while (true) {
      displayBoard(board);
      displayScore(score);

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);

      if (someoneWonRound(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWonRound(board)) {
      prompt(`${detectWinner(board)} won!`);
      updateScore(score, detectWinner(board).toLowerCase());
      if (score.player === WINS_REQUIRED ||
        score.computer === WINS_REQUIRED) {
        displayScore(score);
        break;
      }
    } else {
      prompt('It\'s a tie!');
    }

    readline.question('Press Enter to Continue to the Next Round');
  }

  if (!playAgain()) break;
}

prompt('Thanks for playing Tic Tac Toe!');
