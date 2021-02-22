// Extra Practice for Practice Problems (2, 9, 11, 13, 15, 17):
// Question 2:
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];
// console.log(books.sort((a, b) => Number(a.published) - Number(b.published)));

// // Question 9:
// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
// let result = arr.map(subArr => {
//   if (typeof subArr[0] === 'number') {
//     return subArr.slice().sort((a, b) => b - a);
//   } else {
//     return subArr.slice().sort().reverse();
//   }
// });
// console.log(result);

// Question 11:
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let result = arr.map(object => {
//   let newObj = {};
//   for (let key in object) {
//     newObj[key] = object[key] + 1;
//   }
//   return newObj;
// });
// console.log(arr);
// console.log(result);

// Question 13:
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// let result = arr.sort((a, b) => {
//   let totalA = a.filter(number => number % 2 === 1)
//     .reduce((accum, val) => accum + val, 0);
//   let totalB = b.filter(number => number % 2 === 1)
//     .reduce((accum, val) => accum + val, 0);
//   return totalA - totalB;
// });
// console.log(result);

// Question 15:
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];
// let result = arr.filter(object => {
//   return Object.values(object).every(array => {
//     return array.every(number => number % 2 === 0);
//   });
// });
// console.log(result);

// Question 17:
// function generateUUID() {
//   let characters = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let sections = [8, 4, 4, 4, 12];
//   let uuid = '';
//   sections.forEach((section, sectionIndex) => {
//     for (let idx = 1; idx < section; idx++) {
//       let randomIndex = Math.floor(Math.random() * characters.length);
//       uuid += characters[randomIndex];
//     }
//     if (sectionIndex < sections.length - 1) {
//       uuid += '-';
//     }
//   });
//   return uuid;
// }
// console.log(generateUUID());
// console.log(generateUUID());
// console.log(generateUUID());
