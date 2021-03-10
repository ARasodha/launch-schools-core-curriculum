// My Attempt on building Twenty-One Program
const readline = require('readline-sync');
const MAX_TOTAL = 21;
const DEALER_HITS_UNTIL = 17;

function initializeDeck() {
  let hearts = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  let diamonds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  let clubs = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  let spades = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  let deckOfCards = [...hearts, ...diamonds, ...clubs, ...spades];
  return deckOfCards;
}

function drawRandomCard(deckOfCards) {
  let randomIndex = Math.floor(Math.random() * deckOfCards.length);
  let selectedCard = deckOfCards.splice(randomIndex, 1);

  return selectedCard;
}

function evaluateCards(playerOrDealerCards) {
  let sum = 0;
  playerOrDealerCards.forEach(card => {
    if (typeof card === 'number') {
      sum += card;
    } else if (typeof card === 'string' && card !== 'Ace') {
      sum += 10;
    } else if (card === 'Ace' && sum + 11 <= MAX_TOTAL) {
      sum += 11;
    } else if (card === 'Ace' && sum + 11 > MAX_TOTAL) {
      sum += 1;
    }
  });
  return sum;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function busted(player) {
  return evaluateCards(player) > MAX_TOTAL;
}

function dealCard(player, deckOfCards) {
  return player.push(...drawRandomCard(deckOfCards));
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

function joinOr(array, delimiter = ', ', word = 'and') {
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

function playerHit() {
  prompt('Hit or Stay? ("h" or "s"):');
  let playerDecision = readline.question().toLowerCase();
  while (!['hit', 'stay', 'h', 's'].includes(playerDecision)) {
    prompt('Invalid entry. Enter either "(h)it" or "(s)tay":');
    playerDecision = readline.question().toLowerCase();
  }
  return playerDecision;
}

function displayResult(playerCards, dealerCards) {
  let totalPlayer = evaluateCards(playerCards);
  let totalDealer = evaluateCards(dealerCards);
  if (totalPlayer > totalDealer) {
    prompt('You win!');
  } else if (totalPlayer < totalDealer) {
    prompt('Dealer win!');
  } else {
    prompt('It\'s a tie!');
  }
}

// GAME
while (true) {
  let playerCards = [];
  let dealerCards = [];

  console.clear();

  prompt('Welcome to Twenty-One!');

  let deckOfCards = initializeDeck();

  dealCard(dealerCards, deckOfCards);
  dealCard(dealerCards, deckOfCards);

  prompt(`Dealer has: ${dealerCards[0]} and unknown`);

  dealCard(playerCards, deckOfCards);
  dealCard(playerCards, deckOfCards);

  prompt(`You have: ${playerCards[0]} and ${playerCards[1]} with a total of ${evaluateCards(playerCards)}`);

  let playerDecision;

  while (true) {
    if (busted(playerCards) || evaluateCards(playerCards) === MAX_TOTAL) break;

    playerDecision = playerHit();

    if (['s', 'stay'].includes(playerDecision)) break;

    dealCard(playerCards, deckOfCards);
    evaluateCards(playerCards);
    prompt(`You have: ${joinOr(playerCards, ', ', 'and')} with a total of ${evaluateCards(playerCards)}`);
  }

  if (busted(playerCards)) {
    prompt('You busted! Dealer wins!'); // Add play again option
  } else if (evaluateCards(playerCards) === MAX_TOTAL) {
    prompt('You Win!');
  } else {
    prompt('You chose to stay!');
    prompt('Dealers turn...');
    while (evaluateCards(dealerCards) < DEALER_HITS_UNTIL) {
      if (busted(dealerCards)) break;

      dealCard(dealerCards, deckOfCards);

    }

    prompt(`The dealer has ${joinOr(dealerCards, ', ', 'and')} with the total of ${evaluateCards(dealerCards)}`);

    if (busted(dealerCards)) {
      prompt('Dealer busted! You win!');
    } else {
      displayResult(playerCards, dealerCards);
    }
  }
  if (!playAgain()) break;
}

prompt('Thanks for playing Twenty-One, see you soon!');
