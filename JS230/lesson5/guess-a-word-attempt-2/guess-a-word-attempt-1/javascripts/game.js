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
    this.correctGuesses = 0;
    this.guesses = [];
    console.log(this.word)
    this.init();
  }

  Game.prototype = {
    createBlanks: function () {
      let spans = document.querySelectorAll('span');
      spans.forEach(span => span.remove());

      this.word.forEach(() => letters.appendChild(document.createElement('span')));
    },

    displayMessage: function(text) {
      message.hidden = false;
      message.textContent = text;
    },

    hideMessage: function() {
      message.hidden = true;
    },

    handleKeyup: function() {
      let event = arguments[0];
      let letter = event.key;

      if (event.which < 65 || event.which > 90) return;
      if (this.guesses.includes(letter)) return;
      this.gameLogic(letter);
    },

    gameLogic: function(letter) {
      if (this.word.includes(letter)) {
        let spans = letters.querySelectorAll('span');
        let letterIdx = this.word.indexOf(letter);

        while (letterIdx !== -1) {
          spans[letterIdx].textContent = letter;
          this.word[letterIdx] = null;
          this.correctGuesses++;
          letterIdx = this.word.indexOf(letter);
        }

        this.guesses.push(letter);
      } else if (this.wordDoesntIncludeLetter(letter)) {
        this.incorrectGuesses++;
        this.guesses.push(letter)
        this.addLetterToGuesses(letter);
        this.handleApples(true);
      }

      this.determineOutcome.call(this);
    },

    wordDoesntIncludeLetter(letter) {
      return !this.word.includes(letter);
    },

    addLetterToGuesses: function(letter) {
      let span = document.createElement('span');
      span.textContent = letter;
      guesses.appendChild(span);
    },

    determineOutcome: function() {
      if (this.guessesFinished()) {
        this.displayMessage("You're out of guesses!");
        this.displayReplay();
        this.displayLoseBackground();
        this.unbind();
        this.guesses = [];

        console.log('incorrect guesses after outcome', this.incorrectGuesses);
      } else if (this.wordGuessed()) {
        this.displayMessage("You win!");
        this.displayWinBackground();
        this.displayReplay();
        this.unbind();
        this.guesses = [];
        console.log(this.word)
        console.log(this.guesses)
        console.log('incorrect guesses after outcome', this.incorrectGuesses);
      } else return;

      // console.log('word after outcome:', this.word)
      // console.log('guesses after outcome:', this.guesses)
    },

    wordGuessed() {
      let wordLetters = Array.from(letters.children).filter(el => el instanceof HTMLSpanElement)
      return wordLetters.length === this.correctGuesses;
    },

    guessesFinished() {
      return this.incorrectGuesses === this.allowedGuesses;
    },

    bind: function() {
      document.addEventListener("keyup", this.handleKeyup.bind(this))
    },

    unbind: function() {
      document.removeEventListener("keyup", this.handleKeyup.bind(this));
    },

    displayReplay: function() {
      replay.hidden = false;
    },

    hideReplay: function() {
      replay.hidden = true;
    },

    displayLoseBackground: function() {
      document.body.classList.add('lose');
    },

    displayWinBackground: function() {
      document.body.classList.add('win');
    },

    resetBackground: function() {
      document.body.classList.remove(...document.body.classList);
    },

    handleApples: function(boolean) {
      if (boolean) {
        apples.classList.remove(...apples.classList);
        apples.classList.add(`guess_${this.incorrectGuesses}`);
      } else {
        apples.classList.remove(...apples.classList);
      }
    },

    init: function() {
      this.createBlanks();
      this.bind();
      this.hideReplay();
      this.hideMessage();
      this.resetBackground();
      this.handleApples(false);
      this.guesses = [];
      // console.log('word:', this.word);
    }

  };

  new Game();
  
  replay.addEventListener('click', event => {
    event.preventDefault();
    new Game();
  });

});