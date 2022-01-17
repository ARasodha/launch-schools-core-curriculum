// Practice Problems: The DOM
// Question 1:
// My Solution:
document.querySelector('h1').classList.add('heading');

// Lesson Solution:
document.getElementById('primary_heading').setAttribute('class', 'heading');

// Question 2:
document.getElementById('list').setAttribute('class', 'bulleted');

// Question 3:
// My Solution:
let link = document.querySelector('a');
link.onclick = function (e) {
  e.preventDefault();
  
  let a = document.getElementById('notice');
  if (a.className.includes('hidden')) {
    a.classList.remove('hidden');
    a.classList.add('visible');
  } else {
    a.classList.remove('visible');
    a.classList.add('hidden');
  }
}

// Lesson Solution:
document.getElementById('toggle').onclick = e => {
  e.preventDefault();
  let notice = document.getElementById('notice');
  if (notice.getAttribute('class') === 'hidden') {
    notice.setAttribute('class', 'visible');
  } else {
    notice.setAttribute('class', 'hidden');
  }
}

// Question 4:
let hiddenBox = document.getElementById('notice');
onclick = e => {
  e.preventDefault();
  hiddenBox.setAttribute('class', 'hidden');
}

// Question 5: 
// My Solution:
let multP = document.getElementById('multiplication');
let numbers = multP.textContent.split(' ').filter(word => /[0-9]/.test(word))
                                          .map(numStr => Number(numStr.split('').filter(char => /[0-9]/.test(char)).join('')));
let sum = numbers.reduce((accum, val) => accum * val);
multP.textContent = String(sum);

// Lesson Solution:
document.getElementById('multiplication').textContent = String(13 * 9);

// Question 6:
document.body.id = 'styled';