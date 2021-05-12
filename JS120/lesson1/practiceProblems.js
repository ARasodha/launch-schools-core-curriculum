// Practice Problems: Objects and Factories
// Attributes
//   Title: Mythos
//   Author: Stephen Fry
//
// Behavior:
//   Get Description
//
// -----------------------------
// Attributes
//   Title: Me Talk Pretty One Day
//   Author: David Sedaris
//
// Behavior:
//   Get Description
//
// -----------------------------
// Attributes
//  Title: Aunts aren't Gentlemen
//  Author: PG Wodehouse
//
//  Behavior:
//    Get Description

// Exercise 1:
let book1 = {
  title: 'Mythos',
  author: 'Stephen Fry',

  getDescription() {
    return `${this.title} was written by ${this.author}.`;
  }
}

let book2 = {
  title: 'Me Talk Pretty One Day',
  author: 'David Sedaris',

  getDescription() {
    return `${this.title} was written by ${this.author}.`;
  }
}

let book3 = {
  title: "Aunt aren't Gentlemen",
  author: 'PG Wodehouse',

  getDescription() {
    return `${this.title} was written bby ${this.author}.`;
  }
}
console.log(book1);
console.log(book2);
console.log(book3);

// Exercise 2:
// The code in the first exercise is very repetative and could have been done
// with a factory function to save time and space. The getDescription function
// is also duplicated in each object. The rest of the values are unique.

// Exercise 3:
function createBook(title, author) {
  return {
    title: title,
    author: author,
    getDescription() {
      return `${this.title} was written by ${this.author}.`;
    }
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

console.log(book1);
console.log(book2);
console.log(book3);

console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."
console.log(book2.getDescription());  // "Me Talk Pretty One Day was written by David Sedaris."
console.log(book3.getDescription());  // "Aunts aren't Gentlemen was written by PG Wodehouse"

// Can use simplified syntax when the property name and variable names are the same
function createBook(title, author) {
  return {
    title,     // same as `title: title,`
    author,    // same as `author: author,`

    getDescription: function() {
      return `${this.title} was written by ${this.author}.`;
    },
  };
}

// Exercise 4:
function createBook(title, author, read) {
  return {
    title,
    author,
    read: false,
    getDescription() {
      return `${this.title} was written by ${this.author}.`;
    }
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."
console.log(book2.getDescription());  // "Me Talk Pretty One Day was written by David Sedaris."
console.log(book3.getDescription());  // "Aunts aren't Gentlemen was written by PG Wodehouse"

console.log(book1.read); // => false
console.log(book2.read); // => false
console.log(book3.read); // => false

// Exercise 5:
function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,
    getDescription() {
      return `${this.title} was written by ${this.author}.`;
    }
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

console.log(book1.read); // => false
console.log(book2.read); // => false
console.log(book3.read); // => true

// Exercse 6-7:
function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,
    getDescription() {
      if (read) {
        return `${this.title} was written by ${this.author}. I have read it.`;
      }
      return `${this.title} was written by ${this.author}. I haven't read it.`;
    },
    readBook() {
      read = true;
    }
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

console.log(book1.getDescription()); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
console.log(book1.getDescription()); // Mythos was written by David Fry. I have read it.
