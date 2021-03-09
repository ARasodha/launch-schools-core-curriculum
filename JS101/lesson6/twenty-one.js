const readline = require('readline-sync');

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
    } else if (card === 'Ace' && sum + 11 <= 21) {
      sum += 11;
    } else if (card === 'Ace' && sum + 11 > 21) {
      sum += 1;
    }
  });
  return sum;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function busted(player) {
  return evaluateCards(player) > 21;
}

function dealCard(player, deckOfCards) {
  return player.push(...drawRandomCard(deckOfCards));
}

function playAgain() {
  let answer;
  prompt('Play Again? (y/n)');
  while (true) {
    answer = readline.question().trim();
    if (['y', 'n'].includes(answer)) break;
    prompt('Invalid Entry. Enter either "y" or "n":');
  }
  return answer === 'y';
}

function joinOr(array, delimiter = ', ', word = 'and') {
  switch (array.length) {
    case 0: return ' ';
    case 1: return String(array[0]);
    case 2: return `${array[0]} ${word} ${array[1]}`;
    default: return `${array.slice(0, array.length - 1).join(delimiter)}${delimiter}${word} ${array[array.length - 1]}`;
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

  prompt(`You have: ${playerCards[0]} and ${playerCards[1]}`);

  let playerDecision;

  while (true) {
    if (busted(playerCards) || evaluateCards(playerCards) === 21) break;

    prompt('Hit or stay?');
    playerDecision = readline.question().toLowerCase();
    while (!['hit', 'stay', 'h', 's'].includes(playerDecision)) {
      prompt('Invalid entry. Enter either "(h)it" or "(s)tay":');
      playerDecision = readline.question().toLowerCase();
    }

    if (['s', 'stay'].includes(playerDecision)) break;

    dealCard(playerCards, deckOfCards);
    evaluateCards(playerCards);
    prompt(`You have: ${joinOr(playerCards, ', ', 'and')}`);
  }

  prompt(`The sum of the your cards is: ${evaluateCards(playerCards)}`);

  if (busted(playerCards)) {
    prompt('You busted! Dealer wins!'); // Add play again option
  } else if (evaluateCards(playerCards) === 21) {
    prompt('You Win!');
  } else {
    prompt('You chose to stay!');
    while (evaluateCards(dealerCards) < 17) {
      if (busted(dealerCards)) break;

      dealCard(dealerCards, deckOfCards);

    }
    if (busted(dealerCards)) {
      prompt('Dealer busted! You win!');
    } else {
      prompt(`The sum of the dealers cards is: ${evaluateCards(dealerCards)}`);
      if (evaluateCards(playerCards) > evaluateCards(dealerCards)) {
        prompt('You win!');
      } else if (evaluateCards(playerCards) < evaluateCards(dealerCards)) {
        prompt('Dealer wins!');
      } else {
        prompt('It\'s a tie!');
      }
    }
  }
  if (!playAgain()) break;
}

prompt('Thanks for playing Twenty-One, see you soon!');
