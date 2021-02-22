// Lesson 5 Practice Problems:
// Question 1:
let arr = ['10', '11', '9', '7', '8'];
console.log(arr.slice().sort((a, b) => Number(b) - Number(a)));
// or
let result = arr.sort((a, b) => {
  if (Number(a) < Number(b)) {
    return 1;
  } else if (Number(a) > Number(b)) {
    return -1;
  } else {
    return 0;
  }
});
console.log(result);

// Question 2:
let books = [{
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez',
    published: '1967'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    published: '1925'
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    published: '1869'
  },
  {
    title: 'Ulysses',
    author: 'James Joyce',
    published: '1922'
  },
  {
    title: 'The Book of Kells',
    author: 'Multiple Authors',
    published: '800'
  },
];
console.log(books.sort((a, b) => Number(a.published) - Number(b.published)));

// Question 3:
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);
let arr2 = [{
  first: ['a', 'b', 'c'],
  second: ['d', 'e', 'f']
}, {
  third: ['g', 'h', 'i']
}];
console.log(arr2[1].third[0]);
let arr3 = [
  ['abc'],
  ['def'], {
    third: ['ghi']
  }
];
console.log(arr3[2].third[0][0]);
let obj1 = {
  a: ['d', 'e'],
  b: ['f', 'g'],
  c: ['h', 'i']
};
console.log(obj1.b[1]);
let obj2 = {
  first: {
    d: 3
  },
  second: {
    e: 2,
    f: 1
  },
  third: {
    g: 0
  }
}
console.log(Object.keys(obj2.third)[0]);


// Question 4:
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
console.log(arr1);
let arr2 = [{
  a: 1
}, {
  b: 2,
  c: [7, 6, 5],
  d: 4
}, 3];
arr2[2] = 4;
console.log(arr2);
let obj1 = {
  first: [1, 2, [3]]
};
obj1.first[2][0] = 4;
console.log(obj1);
let obj2 = {
  a: {
    a: ['1', 'two', 3],
    b: 4
  },
  b: 5
};
obj2['a']['a'][2] = 4;
console.log(obj2);

// Question 5:
let munsters = {
  Herman: {
    age: 32,
    gender: 'male'
  },
  Lily: {
    age: 30,
    gender: 'female'
  },
  Grandpa: {
    age: 402,
    gender: 'male'
  },
  Eddie: {
    age: 10,
    gender: 'male'
  },
  Marilyn: {
    age: 23,
    gender: 'female'
  }
};
// Solution one:
let subObjs = Object.values(munsters);
let totalMaleAge = 0;
subObjs.forEach(object => {
  if (object['gender'] === 'male') {
    totalMaleAge += object['age'];
  }
});
console.log(totalMaleAge);
// Solution two:
let totalMaleAge = 0;
for (let member in munsters) {
  if (munsters[member].gender === 'male') {
    totalMaleAge += munsters[member].age;
  }
}
console.log(totalMaleAge);

// Question 6:
let munsters = {
  herman: {
    age: 32,
    gender: 'male'
  },
  lily: {
    age: 30,
    gender: 'female'
  },
  grandpa: {
    age: 402,
    gender: 'male'
  },
  eddie: {
    age: 10,
    gender: 'male'
  },
  marilyn: {
    age: 23,
    gender: 'female'
  }
};
for (let member in munsters) {
  console.log(`${member} is a ${munsters[member].age}-year-old ${munsters[member].gender}.`);
}

// Question 7:
let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, [5, 8]]
arr[0] += 2; // 4
arr[1][0] -= a; // [3, 8]

// Question 8:
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
let values = Object.values(obj);
let vowels = 'aeiou';
values.forEach(subArr => {
  subArr.forEach(letter => {
    letter.split('').forEach(letter => {
      if (vowels.split('').includes(letter)) {
        console.log(letter);
      }
    });
  });
});

// Question 9:
let arr = [
  ['b', 'c', 'a'],
  [2, 1, 3],
  ['blue', 'black', 'green']
];
let result = arr.slice().map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a, b) => a - b);
  } else {
    return subArr.slice().sort();
  }
});
console.log(arr);
console.log(result);

// Question 10:
let arr = [
  ['b', 'c', 'a'],
  [2, 1, 3],
  ['blue', 'black', 'green']
];
let result = arr.map(subArr => {
  return subArr.sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });
});
console.log(arr);
console.log(result);

// Question 11:
let arr = [{
  a: 1
}, {
  b: 2,
  c: 3
}, {
  d: 4,
  e: 5,
  f: 6
}];
let result = arr.map(object => {
  let newObj = {};
  for (let key in object) {
    newObj[key] = object[key] + 1;
  }
  return newObj;
});
console.log(arr);
console.log(result);

// Question 12:
let arr = [
  [2],
  [3, 5, 7],
  [9],
  [11, 15, 18]
];
let result = arr.map(array => {
  return array.filter(number => number % 3 === 0);
});
console.log(result);

// Question 13:
let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3]
];
let result = arr.sort((a, b) => {
  let totalA = a.filter(number => number % 2 === 1)
    .reduce((accum, val) => accum + val, 0);
  let totalB = b.filter(number => number % 2 === 1)
    .reduce((accum, val) => accum + val, 0);
  return totalA - totalB;
});
console.log(result);

// Question 14:
let obj = {
  grape: {
    type: 'fruit',
    colors: ['red', 'green'],
    size: 'small'
  },
  carrot: {
    type: 'vegetable',
    colors: ['orange'],
    size: 'medium'
  },
  apple: {
    type: 'fruit',
    colors: ['red', 'green'],
    size: 'medium'
  },
  apricot: {
    type: 'fruit',
    colors: ['orange'],
    size: 'medium'
  },
  marrow: {
    type: 'vegetable',
    colors: ['green'],
    size: 'large'
  },
};
let capitalizeFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);
let result = Object.values(obj).map(object => {
  if (object['type'] === 'fruit') {
    return object['colors'].map(value => capitalizeFirstLetter(value));
  } else if (object['type'] === 'vegetable') {
    return object['size'].toUpperCase();
  }
});
console.log(result);

// Question 15:
let arr = [{
    a: [1, 2, 3]
  },
  {
    b: [2, 4, 6],
    c: [3, 6],
    d: [4]
  },
  {
    e: [8],
    f: [6, 10]
  },
];
let result = arr.filter(object => {
  return Object.values(object).every(array => {
    return array.every(number => number % 2 === 0);
  });
});
console.log(result);

// Question 16:
let arr = [
  ['a', 1],
  ['b', 'two'],
  ['sea', {
    'c': 3
  }],
  ['D', ['a', 'b', 'c']]
];
// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
let newObject = {};
arr.forEach(subArr => {
  newObject[subArr[0]] = subArr[1];
});
console.log(newObject);

// Question 17:
function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];
  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let idx = 1; idx < section; idx++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }
    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });
  return uuid;
}
console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());
