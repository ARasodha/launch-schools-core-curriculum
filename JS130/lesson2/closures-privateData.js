// Closures and Private Data
// Problem 1:
function makeCounterLogger(firstNumber) {
  return function(secondNumber) {
    let num = firstNumber;
    if (firstNumber < secondNumber) {
      while (num <= secondNumber) {
        console.log(num);
        num += 1;
      }
    } else if (firstNumber > secondNumber) {
        while (num >= secondNumber) {
          console.log(num);
          num -= 1;
        }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);

// Problem 2:
function makeList() {
  let list = [];
  return function(item) {
    if (!(item) && list.length > 0) {
      list.forEach(todo => console.log(todo));
    } else if (!(item) && list.length === 0) {
      console.log('The list is empty.')
    } else if (!list.includes(item)) {
      list.push(item);
      console.log(`${item} added!`);
    } else if (list.includes(item)) {
      let index = list.indexOf(item);
      list.splice(index, 1);
      console.log(`${item} removed!`);
    }
  }
}

let list = makeList();
list();
// The list is empty.

list("make breakfast");
// make breakfast added!

list("read book");
// read book added!

list();
// make breakfast
// read book

list("make breakfast");
// make breakfast removed!

list();
// read book 

// More Practice Problems:
// Problem 1:
function makeList() {
  let items = [];
  return {
    add(item) {
      if (!items.includes(item)) {
        items.push(item);
        console.log(`${item} added!`);
      }
    },

    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    },

    remove(item) {
      if (items.includes(item)) {
        let index = items.indexOf(item);
        items.splice(index, 1);
        console.log(`${item} removed!`);
      }
    }
  }
}

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn
console.log(list.items)