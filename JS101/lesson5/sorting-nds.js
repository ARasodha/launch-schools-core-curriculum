// Sorting Lesson:

let words = ['go', 'ahead', 'and', 'jump'];
console.log(words.sort((a, b) => a.length - b.length));

let scores = [
  [3, 6, 4],
  [6, 8, 9],
  [1, 4, 2]
];
console.log(scores.sort((a, b) => {
  let totalAScore = a.reduce((number, next) => number + next);
  let totalBScore = b.reduce((number, next) => number + next);
  return totalAScore - totalBScore;
}));

let arr = [
  [1, 3],
  [2]
];
console.log(arr);
arr[0][2] = 5;
arr[0].push(['another1']);
console.log(arr);

let arr = [{
  a: 'ant'
}, {
  b: 'bear'
}];
arr[0]['c'] = 'cat';
arr[1].d = 'dog';
console.log(arr);

// Nested Data Structures Lesson:

let a = [1, 2, [3, 4]];
Object.freeze(a);
let serializedObj = JSON.stringify(a);
let deepCopyObj = JSON.parse(serializedObj);
a[2].push([5]);
deepCopyObj.push('helloWorld');
console.log(a);
console.log(serializedObj);
console.log(deepCopyObj);
console.log(Object.isFrozen(a));
