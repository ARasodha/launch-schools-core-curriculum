// Finding DOM Nodes
// Problem Group 1:
// Walk Helper Function
function walk(node, callback) {
  callback(node);
  for (let idx = 0; idx < node.childNodes.length; idx++) {
    walk(node.childNodes[idx], callback);
  }
}

// Question 1:
// My Solution:
let paragraphs = [];
walk(document, node => {
  if (node.nodeName === 'P') {
    paragraphs.push(node);
  }
});
paragraphs;

// Lesson Solution:
function findAllParagraphs() {
  let matches = [];
  let nodes = document.body.childNodes;

  for (let idx = 0; idx < nodes.length; idx++) {
    if (nodes[idx] instanceof HTMLParagraphElement) {
      matches.push(nodes[idx]); 
    }
  }
  
  return matches;
}

findAllParagraphs();

// Question 2:
// My Solution:
Array.from(
  document.getElementsByTagName('p')).forEach(para => para.setAttribute('class', 'article-text')
  );

// Lesson Solution:
function setClassForAllParas(node) {
  if (node instanceof HTMLParagraphElement) {
    node.classList.add('article-text');
  }

  let nodes = node.childNodes;
  for (let idx = 0; idx < nodes.length; idx++) {
    setClassForAllParas(nodes[idx]);
  }
}

setClassForAllParas(document);

// Question 3
function getElementsByTagName(tagName) {
  let matches = [];

  walk(document.body, (node) => {
    if (node.nodeName.toLowerCase() === tagName) {
      matches.push(node);
    }
  });

  return matches;
}

getElementsByTagName("p").forEach((paragraph) =>
  paragraph.classList.add("article-text")
);

// Problem Group 2:
// Question 1:
Array.from(
  document.getElementsByTagName('p')).forEach(para => para.setAttribute('class', 'article-text')
  );

  // Question 2:
  // My Solution:
  let divs = document.getElementsByClassName('intro');
  let paragraphs = [];
  Array.from(divs).forEach(div => {
    paragraphs.push(...div.getElementsByTagName('p'));
  });

  Array.from(paragraphs).forEach(para => para.classList.add('article-text'));

  // Lesson Solution:
  let intros = document.getElementsByClassName('intro');
  for (let idx = 0; idx < intros.length; idx++) {
    let paragraphs = intros[idx].getElementsByTagName('p');

    for (let jdx = 0; jdx < paragraphs.length; jdx++) {
      paragraphs[jdx].classList.add('article-text');
    }
  }

  // Solution using querySelectorAll
  let paragraphs = document.querySelectorAll('.intro p');
  for (let idx = 0; idx < paragraphs.length; idx++) {
    paragraphs[idx].classList.add('article=text');
  }