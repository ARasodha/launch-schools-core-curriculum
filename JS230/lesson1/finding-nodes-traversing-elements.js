// Practice Problems: Finding Nodes and Traversing Elements
// Questions 1: 
let h2s = document.getElementsByTagName('H2');
let arr = Array.from(h2s).map(h2 => {
  return h2.textContent.trim().split(' ').length;
});
arr;

// Question 2:
// Method 1:
document.getElementById('toc');
// Method 2:
document.querySelector('#toc');
// Method 3:
document.querySelectorAll('.toc')[0];

// Questions 3:
// My Solution:
function oddIndexLinksGreen() {
  let div = document.getElementById('toc');
  let links = Array.from(div.getElementsByTagName('A'));
  
  links.forEach((link, idx) => {
    if (idx % 2 === 1) {
      link.style.color = 'green';
    }
  });
}
oddIndexLinksGreen();

// Lesson Solution:
let links = document.querySelectorAll('.toc a');
for (let idx = 0; idx < links.length; idx += 1) {
  if (idx % 2 === 1) {
    links[idx].style.color = 'green';
  }
}

// Question 4:
let captions = [];
let divs = document.querySelectorAll('.thumbcaption');
Array.from(divs).forEach(div => {
  captions.push(div.textContent.trim());
});
captions;

// Question 5:
let keys = ['Kingdom', 'Phylum', 'Clade', 'Class', 'Order', 'Suborder', 'Family',
            'Genus', 'Species'];
let classification = {};
let tds = document.querySelectorAll('.infobox td');
let cell;
let link;

for (let idx = 0; idx < tds.length; idx++) {
  cell = tds[indx];

  keys.forEach(key => {
    if (cell.textContent.indexOf(key) !== -1) {
      link = cell.nextElementSibling.firstElementChild;
      classification[key] = link.textContent;
    }
  });
}

console.log(classification);