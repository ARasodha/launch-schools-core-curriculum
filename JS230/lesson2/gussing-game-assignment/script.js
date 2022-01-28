document.addEventListener('DOMContentLoaded', event => {
  let answer = Math.floor(Math.random() * 100) + 1;
  let form = document.querySelector('form');
  let paragraph = document.querySelector('p');
  let guessBtn = document.querySelector('[type="submit"]');
  let link = document.querySelector('a');
  let guesses = 0;
  
  function validateGuess(guess) {
    return !Number.isNaN(guess) && guess <= 100 && guess >= 1;
  }
  
  function newGame() {
    guessBtn.disabled = false;
    form.reset();  
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
  }

  guessBtn.addEventListener('click', event => {
    event.preventDefault();
    let guess = parseInt(document.querySelector('#guess').value);
    let message;

    guesses++;

    if (validateGuess(guess)) {
      if (guess > answer) {
        message = `My number is lower than ${String(guess)}`;
      } else if (guess < answer) {
        message = `My number is higher than ${String(guess)}`;
      } else if (guess === answer) {
        message = `You guessed it! It took you ${guesses} guesses,`;
        guessBtn.style.boxShadow = 'blue';
        guessBtn.disabled = true;
      }
    
      paragraph.textContent = message;
    } else {
      paragraph.textContent = 'Please enter a valid number between 1 and 100';
    }
  });


  link.addEventListener('click', event => {
    answer = Math.floor(Math.random() * 100) + 1;
    paragraph.textContent = 'Guess a number from 1 to 100';
  })
});
