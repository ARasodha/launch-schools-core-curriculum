//  Practice Problems: Traversing and Accessing Attributes
// Walk Function
function walk(node, callback) {
  callback(node);
  for (let idx = 0; idx < node.childNodes.length; idx++) {
    walk(node.childNodes[idx], callback);
  }
}

// Question 1:
let html = document.childNodes[1];
let body = html.lastChild;
let heading = body.querySelector('h1');
heading.style.color = 'red';

// Question 2:
let count = 0;
walk(document, node => {
  if (node.nodeName === 'P') {
    couNT++;
  }
});
count; // 5

// Question 3:
let firstWords = [];
walk(document, node => {
  if (node instanceof HTMLParagraphElement) {
    firstWords.push(node.textContent.trim().split(' ')[0])
  }
});
firstWords; // ['A', 'The', 'The', 'Where', 'And']

// Question 4:
let first = true;
walk(document, node => {
  if (node instanceof HTMLParagraphElement) {
    if (first) {
      first = false;
    } else {
      node.classList.add('stanza');
    }
  }
});

// Question 5:
let images = [];
walk(document, node => {
  if (node instanceof HTMLImageElement) {
    images.push(node);
  }
});

let count = 0;
for (let idx = 0; idx < images.length; idx++) {
  if (/png$/.test(images[idx].getAttribute('src'))) {
    count++;
  }
}
count; // 23

// Question 6:
walk(document, node => {
  if (node instanceof HTMLAnchorElement) {
    node.style.color = 'red';
  }
});

