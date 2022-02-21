let randomWord = function() {
  let words = ['apple', 'banana', 'orange', 'pear'];
  return function() {
    let word = words[Math.floor(Math.random() * words.length)];
    words.splice(words.indexOf(word), 1);
    return word;
  }
}();

document.addEventListener("DOMContentLoaded", event => {
  let message = document.querySelector("#message");
  let letters = document.querySelector("#spaces");
  let guesses = document.querySelector("#guesses");
  let apples = document.querySelector("#apples");
  let replay = document.querySelector("#replay");

  function Game() {
    this.word = randomWord();
    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!");
      return this;
    }
    this.word = this.word.split('');
    this.incorrectGuesses = 0;
    this.allowedGuesses = 6;
    this.guesses = [];
    this.init();
  }

  Game.prototype = {
    createBlanks() {
      let spans = document.querySelectorAll('span');
      spans.forEach(span => span.remove());

      this.word.forEach(() => letters.appendChild(document.createElement('span')));
    },

    displayMessage(text) {
      message.textContent = text;
    },

    keyPress: function() {
      document.addEventListener('keyup', event => {
        let letter = event.key;
        console.log(letter, event.which)
        if (event.which < 65|| event.which > 90) return;
        if (this.guesses.includes(letter)) return;
        this.gameLogic(letter);
      })
    },

    gameLogic: function(letter) {
      if (this.word.includes(letter)) {
        let spans = letters.querySelectorAll('span');
        let letterIdx = this.word.indexOf(letter);

        while (letterIdx !== -1) {
          spans[letterIdx].textContent = letter;
          this.word[letterIdx] = null;
          letterIdx = this.word.indexOf(letter);
        }

      } else {
        this.incorrectGuesses++;
        let span = document.createElement('span');
        span.textContent = letter;
        guesses.appendChild(span);
        this.handleApples();
      }

      this.determineOutcome();
    },

    determineOutcome() {
      if (this.incorrectGuesses === this.allowedGuesses) {
        this.displayMessage("You're out of guesses!");
        this.displayReplay();
        this.displayLoseBackground();
      } else if (this.word.every(char => char === null)) {
        this.displayMessage("You win!");
        this.displayWinBackground();
        this.displayReplay();
        
      }
    },

    displayReplay() {
      replay.hidden = false;
    },

    hideReplay() {
      replay.hidden = true;
    },

    displayLoseBackground: function() {
      document.body.classList.add('lose');
    },

    displayWinBackground: function() {
      document.body.classList.add('win');
    },

    handleApples() {
      apples.classList.add(`guess_${this.incorrectGuesses}`);
    },

    init() {
      this.createBlanks();
      this.keyPress();
      this.hideReplay();
    }

  };

  new Game();
  
  replay.addEventListener('click', event => {
    event.preventDefault();
    new Game();
  });

});