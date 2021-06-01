const shuffle = require('shuffle-array');
const readline = require('readline-sync');

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.name = `${this.rank} of ${this.suit}`;
  }

  getValue() {
    if (!Number.isInteger(this.rank)) {
      if (this.rank === 'Ace') return 11;
      return 10;
    } else {
      return this.rank;
    }
  }
}

class Deck {
  static SUITS = ['Diamonds', 'Clubs', 'Spades', 'Hearts'];
  static RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

  constructor() {
    this.cards = [];
  }

  create() {
    for (let suit of Deck.SUITS) {
      for (let rank of Deck.RANKS) {
        this.cards.push(new Card(rank, suit));
      }
    }
    this.cards = shuffle(this.cards);
  }

  deal(player) {
    player.hand.push(this.cards.pop())
  }
}

class Participant {
  constructor() {
    this.hand = [];
  }
  
  resetHand() {
    this.hand = [];
  }

  handTotal() {
    let sum = 0;
    let aceCount = this.countAces();
    for (let card of this.hand) {
      sum += card.getValue();
    }

    while (sum > TwentyOneGame.WINNING_SCORE && aceCount > 0) {
      sum -= 10;
      aceCount--;
    }

    return sum;
  }

  countAces() {
    let count = 0;
    for (let card of this.hand) {
      if (card.rank === 'Ace') {
        count++;
      }
    }

    return count;
  }

  displayHand() {
    console.log(`${this.name} has:`);
    this.hand.forEach(card => console.log(card.name));
    console.log(`For a total of ${this.handTotal()}.`);
  }

  isBusted() {
    return this.handTotal() > TwentyOneGame.WINNING_SCORE;
  }

  has21() {
    return this.handTotal() === TwentyOneGame.WINNING_SCORE;
  }
}

class Player extends Participant {
  static STARTING_PURSE = 5;
  constructor() {
    super();
    this.name = 'Player';
    this.dollars = Player.STARTING_PURSE = 5;
  }

  displayDollars() {
    console.log(`BALANCE: $${this.dollars}.`);
    console.log('');
  }

  resetDollars() {
    this.dollars = Player.STARTING_PURSE;
  }

}

class Dealer extends Participant {
  static HIT_LIMIT = 17;

  constructor() {
    super();
    this.name = 'Dealer';
  }
}

class TwentyOneGame {
  static WINNING_SCORE = 21;
  static WINNING_PURSE = 10;

  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  start() {
    this.deck.create();
    this.displayWelcomeMessage();
    this.promptAndClear();
    while (true) {
      while (true) {
        this.playOnce();
        if (this.gameOver()) break;
        this.resetRound();
      }

      this.displayMatchResult();
      if (!this.playAgain()) break;
      this.resetGame();
      console.clear();
    }

    this.displayGoodbyeMessage();
  }

  playOnce() {
    let winningPlayer;

    this.player.displayDollars();
    this.dealCards();
    this.showCards();
    this.playerTurn(); 

    if (this.player.has21()) winningPlayer = this.player;
    if (this.player.isBusted()) winningPlayer = this.dealer;

    if (!winningPlayer) {
      this.dealerTurn();
    }

    this.displayRoundResult();
    this.adjustDollars(this.determineWinner());
    this.promptAndClear();
  }

  dealCards() {
    this.deck.deal(this.player);
    this.deck.deal(this.dealer);
    this.deck.deal(this.player);
    this.deck.deal(this.dealer);
  }

  showCards() {
    this.player.displayHand();
    console.log(`The dealer has ${this.dealer.hand[0].name}`);
    console.log('');
  }

  promptAndClear() {
    readline.question('Press "Enter" to Continue: ');
    console.clear();
  }

  playerTurn() {
    while (true) {
      if (this.player.has21() || this.player.isBusted()) break;

      let answer = this.hitOrStay();
      if (answer === 'hit') {
        this.deck.deal(this.player);
        console.clear();
        console.log('You hit!');
        this.player.displayHand();
      } else break;
    }
  }

  hitOrStay() {
    let answer;
    while (true) {
      answer = readline.question('Hit or Stay? ').toLowerCase();
      if (['hit', 'stay'].includes(answer)) break;

      console.log('Invalid entry.');
    }

    return answer;
  }
  

  dealerTurn() {
    console.clear();
    this.dealer.displayHand();
    this.promptAndClear();
    while (true) {
      if (this.dealer.handTotal() >= Dealer.HIT_LIMIT || this.dealer.isBusted()) break;
      this.deck.deal(this.dealer);
      this.dealer.displayHand();
      this.promptAndClear();
    }
  }

  displayWelcomeMessage() {
    console.log(`Welcome to Twenty-One! Earn $${TwentyOneGame.WINNING_PURSE} to win or drop to $0 to loose... `);
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Twenty-One! Goodbye!');
  }

  displayRoundResult() {
    let dealerTotal = this.dealer.handTotal();
    let playerTotal = this.player.handTotal();

    if (this.dealer.isBusted()) {
      console.log('The Dealer busted!');
    } else if (this.player.isBusted()) {
      console.log('You busted!')
    } 
    
    if (dealerTotal > playerTotal && !this.dealer.isBusted()) {
      console.log('The Dealer won! [ -$1 ]');
    } else if (dealerTotal < playerTotal && !this.player.isBusted()) {
      console.log('You win! [ +$1 ]');
    }
  }

  determineWinner() {
    let dealerTotal = this.dealer.handTotal();
    let playerTotal = this.player.handTotal();

    if (this.dealer.isBusted() || playerTotal > dealTotal) {
      return this.player;
    } else if (this.player.isBusted() || dealerTotal > playerTotal) {
      return this.dealer;
    } 
  }
  
  adjustDollars(winner) {
    if (winner === this.player) {
      this.player.dollars++;
    } else if (winner = this.dealer) {
      this.player.dollars--;
    }
  }

  gameOver() {
    return this.player.dollars === 0 || this.player.dollars === TwentyOneGame.WINNING_PURSE;
  }

  playAgain() {
    let answer;
    while (true) {
      answer = readline.question('Would you like to play again? (y/n) ').toLowerCase();
      if (['y', 'n'].includes(answer)) break;

      console.log('Invalid entry.');
    }

    return answer === 'y';
  }

  resetRound() {
    this.player.resetHand();
    this.dealer.restHand();
    this.deck.create();    
  }

  resetGame() {
    this.resetRound();
    this.player.resetDollars();
  }

  displayMatchResult() {
    if (this.player.dollars === TwentyOneGame.WINNING_PURSE) console.log(`You have $${TwentyOneGame.WINNING_PURSE}! You win!`);
    if (this.player.dollars === 0) console.log(`You went broke with $0!`)
  }
}

let game = new TwentyOneGame();
game.start();