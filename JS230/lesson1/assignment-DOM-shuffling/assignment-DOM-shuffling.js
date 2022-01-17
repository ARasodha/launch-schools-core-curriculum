// Assignment: DOM Shuffling
// My Solution:
// header needs to be firstChild inside body before main
let header = document.getElementsByTagName('header')[1];
let main = document.body.querySelector('main');
document.body.insertBefore(header, main);

// h1 needs to be first child in header
let h1 = document.querySelector('h1');
let header = document.querySelector('header');
let target = header.firstElementChild;
header.insertBefore(h1, target);

// article needs to be only child of section
  // 2 figure elements need to be placed as the last children of article
let figures = Array.from(document.body.getElementsByTagName('figure')).reverse();
let article = document.body.getElementsByTagName('article')[0];
figures.forEach(figure => article.appendChild(figure));

// Assignment Solution:
let header = document.querySelector('body > header');
let h1 = document.querySelector('main > h1');
header.insertBefore(h1, header.firstChild);
document.body.insertBefore(header, document.body.firstChild);

let [ chinStickFigure, babyMopFigure ] = document.querySelectorAll('figure');

let babyMopImage = chinStickFigure.querySelector('img');
let chinStickImage = babyMopFigure.querySelector('img');
chinStickFigure.insertBefore(chinkStickImage, chinkStickFigure.firstChild);
babyMopFigure.insertBefore(babyMopImage, babyMopFigure.firstChild);

let article = document.querySelector('article');
article.insertBefore(chinStickFigure, null);
article.insertBefore(babyMopFigure, null);