let textField = document.querySelector('.text-field');
let cursorInterval;

document.addEventListener('DOMContentLoaded', event => {
  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');
    
    if (!cursorInterval) {
      cursorInterval = setInterval(() => textField.classList.toggle('cursor'), 500);
    }
  });
});

document.addEventListener('keydown', event => {
  let contentDiv = document.querySelector('.content');
  let text = contentDiv.textContent;
  
  if (textField.classList.contains('focused')) {
    if (event.key === 'Backspace' && text.length > 0) {
      contentDiv.textContent = text.slice(0, text.length - 1);
    } else if (event.key.length === 1) {
      let contentDiv = document.querySelector('.content');
      
      contentDiv.textContent = contentDiv.textContent += event.key;
    }
  }
});

document.addEventListener('click', event => {
  clearInterval(cursorInterval);
  cursorInterval = null;
  textField.classList.remove('focused');
  textField.classList.remove('cursor');
});