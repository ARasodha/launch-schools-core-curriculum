// Twenty-One Possible Solution from Lesson
const readline = require('readline-sync');

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const WINS_REQUIRED = 5;
const DEALER_HITS_UNTIL = 17;
const HIT_MAX = 21;

function prompt(message) {
  console.log(`=> ${message}`);
}

// shuffle an array
function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to i
    [array[first], array[second]] = [array[second], array[first]]; // swap elements
  }

  return array;
}

function initializeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ...]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === 'A').forEach(_ => {
    if (sum > HIT_MAX) sum -= 10;
  });

  return sum;
}

function busted(cards) {
  return total(cards) > HIT_MAX;
}

function detectResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > HIT_MAX) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > HIT_MAX) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResults(dealerCards, playerCards) {
  let result = detectResult(dealerCards, playerCards);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins this round!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win this round!');
      break;
    case 'PLAYER':
      prompt('You Win Round!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt('This round is a tie!');
      break;
  }
}

function playAgain() {
  let answer;
  prompt('Play Again? (y/n)');
  while (true) {
    answer = readline.question().trim().toLowerCase();
    if (['y', 'n'].includes(answer)) break;
    prompt('Invalid Entry. Enter either "y" or "n":');
  }
  return answer === 'y';
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

function intitializeScore() {
  let score = {
    player: 0,
    dealer: 0,
    ties: 0
  };
  return score;
}

function displayScore(score) {
  console.log(`Player Score: ${score.player} | Dealer Score: ${score.dealer} | Ties: ${score.ties}`);
}

function updateScore(score, playerCards, dealerCards) {
  let result = detectResult(dealerCards, playerCards);

  if (result === 'PLAYER_BUSTED' || result === 'DEALER') {
    score.dealer++;
  } else if (result === 'DEALER_BUSTED' || result === 'PLAYER') {
    score.player++;
  } else if (result === 'TIE') {
    score.ties++;
  }
}

function detectWinner(score) {
  return score.player === WINS_REQUIRED || score.dealer === WINS_REQUIRED;
}

function gameWinner(score) {
  if (score.player > score.dealer) {
    console.log('------------------------');
    console.log('You won the game!');
  } else {
    console.log('------------------------');
    console.log('The dealer won the game!');
  }
}

// GAME
while (true) {
  console.clear();
  prompt('Welcome to Twenty-One!');
  prompt('First to 5 wins');
  let score = intitializeScore();
  let round = 0;

  while (true) {
    readline.question('Press Enter to continue!');
    console.clear();
    round++;
    // declare and intialize vars
    let deck = initializeDeck();
    let playerCards = [];
    let dealerCards = [];

    // initial deal
    playerCards.push(...popTwoFromDeck(deck));
    dealerCards.push(...popTwoFromDeck(deck));
    console.log('------------------');
    console.log(`      ROUND ${round}  `);
    console.log('------------------');

    prompt(`Dealer has ${dealerCards[0]} and ?`);
    prompt(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${total(playerCards)}.`);

    // player turn
    while (true) {
      let playerTurn;
      while (true) {
        prompt('Would you like to (h)it or (s)tay?');
        playerTurn = readline.question().toLowerCase();
        if (['h', 's'].includes(playerTurn)) break;
        prompt('Sorry, must enter "h" or "s".');
      }

      if (playerTurn === 'h') {
        playerCards.push(deck.pop());
        prompt('You chose to hit!');
        prompt(`You cards are now: ${hand(playerCards)}`);
        prompt(`Your total is now: ${total(playerCards)}`);
      }

      if (playerTurn === 's' || busted(playerCards)) break;
    }

    if (busted(playerCards)) {
      displayResults(dealerCards, playerCards);
      updateScore(score, playerCards, dealerCards);
      displayScore(score);
      continue;
    } else {
      prompt(`You stayed at ${total(playerCards)}`);
    }

    // dealer turn
    prompt('Dealer turn...');

    while (total(dealerCards) < DEALER_HITS_UNTIL) {
      prompt('Dealer hits!');
      dealerCards.push(deck.pop());
      prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
    }

    if (busted(dealerCards)) {
      prompt(`Dealer total is now ${total(dealerCards)}`);
      displayResults(dealerCards, playerCards);
      updateScore(score, playerCards, dealerCards);
      displayScore(score);
      continue;
    } else {
      prompt(`Dealer stays at ${total(dealerCards)}`);
    }

    // both players and dealer stays - compare cards;
    console.log('===============');
    prompt(`Dealer has ${dealerCards}, for a total of: ${total(dealerCards)}`);
    prompt(`Player has ${playerCards}, for a total of: ${total(playerCards)}`);
    console.log('===============');

    displayResults(dealerCards, playerCards);
    updateScore(score, playerCards, dealerCards);
    displayScore(score);

    if (detectWinner(score)) break;
  }
  gameWinner(score);
  if (!playAgain()) break;
}

prompt('Thanks for playing Twenty-One!');
