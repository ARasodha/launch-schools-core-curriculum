const readline = require('readline-sync');

// Create Deck
function initializeDeck() {
  let hearts = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  let diamonds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  let clubs = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  let spades = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  let deckOfCards = [...hearts, ...diamonds, ...clubs, ...spades];
  return deckOfCards;
}

// Deal Card
function cardDealer(deckOfCards) {
  let randomIndex = Math.floor(Math.random() * deckOfCards.length);
  let selectedCard = deckOfCards.splice(randomIndex, 1);

  return selectedCard;
}

// Evaluate Cards: (be able to iterate over player and dealer cards)
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

// Prompt user
function prompt(msg) {
  console.log(`=> ${msg}`);
}

// Detect if either play busted
function busted(player) {
  return evaluateCards(player) > 21;
}

// Gives a card to either the dealer or player
function dealCard(player, deckOfCards) {
  return player.push(...cardDealer(deckOfCards));
}

// Ask user to play again
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

  // Player Loop
  let playerDecision;

  while (true) {
    if (busted(playerCards) || evaluateCards(playerCards) === 21) break;

    prompt('Player, hit or stay?');
    playerDecision = readline.question().toLowerCase();
    while (!['hit', 'stay', 'h', 's'].includes(playerDecision)) {
      prompt('Invalid entry. Enter either "(h)it" or "(s)tay":');
      playerDecision = readline.question().toLowerCase();
    }

    if (['s', 'stay'].includes(playerDecision)) break;

    dealCard(playerCards, deckOfCards);
    evaluateCards(playerCards);
    prompt(`You have: ${playerCards.join(', ')}`);
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
      prompt('Dealer busted! You win!'); // Add play again option
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
