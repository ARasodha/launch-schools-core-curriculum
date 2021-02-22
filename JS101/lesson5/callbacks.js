// Working with Callback Functions Lesson:
/* Questions to ask when evaluating callback function:
  - What type of action is being performed? Method call? Callback? Conditional?
  Something else?
  - On what value is that action perfomed?
  - What is the side-effect of that action? (ex: output or destructive action?)
  - What is the return value of that action?
  - Is the return value used by whatever instigated the action?
  */

// Example 1:
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined
/* Analysis:
  ACTION: method call (foreach)
  PERFORMED ON: outter array
  SIDE EFFECTS: none
  RETURN VALUE: undefined
  IS RETURN VALUE USED: No but shown on line 15

  ACTION: callback execution
  PERFORMED ON: each sub array
  SIDE EFFECTS: none
  RETURN VALUE: undefined
  IS RETURN VALUE USED: n

  ACTION: element reference ([0])
  PERFORMED ON: each sub array
  SIDE EFFECTS: none
  RETURN VALUE: element at index 0 of subarry
  IS RETURN VALUE USED: yes used by console.log

  ACTION: method call (console.log)
  PERFORMED ON: element at index 0 of the sub-array
  SIDE EFFECTS: outputs string representation of a number
  RETURN VALUE: undefined
  IS RETURN VALUE USED: yes used to determine callbacks return value
  */

// Example 3: DIY:
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});
// 1
// 3
// [1. 3]
/* Analysis:
  ACTION: method call (map)
  PERFORMED ON: the outter array
  SIDE EFFECTS: none
  RETURN VALUE: new array
  IS RETURN VALUE USED: no

  ACTION: callback execution
  PERFORMED ON: each sub array
  SIDE EFFECTS: none
  RETURN VALUE: element at index 0 of sub array
  IS RETURN VALUE USED: yes by map for transformation

  ACTION: element access ([0])
  PERFORMED ON: each sub array
  SIDE EFFECTS: none
  RETURN VALUE: element at index 0 of sub array
  IS RETURN VALUE USED: yes used by console.log

  ACTION: method call (console.log)
  PERFORMED ON: element at index 0 of each sub array
  SIDE EFFECTS: outputs a string representation of the integer
  RETURN VALUE: undefined
  IS RETURN VALUE USED: no

  ACTION: element reference ([0])
  PERFORMED ON: each sub array
  SIDE EFFECTS: none
  RETURN VALUE: element at index 0 of sub array
  IS RETURN VALUE USED: yes explicitly returned by the callback
   */

// Example 4:
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});
//18
//7
//12
//undefined

// Example 5:
console.log([[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
}));
// [[2, 4]. [6. 8]]

// Example 6:
console.log([{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
}));
// => [ { c: 'cat', d: 'dog' } ]

// Exanmple 7:
console.log([[8, 13, 27], ['apple', 'banana', 'canrtalope']].map(arr => {
  return arr.filter(item => {
    if (item === 'number') {
      return item > 13;
    } else {
      return item.length < 6;
    }
  })
}));
// => [ [ 27 ], [ 'apple' ] ]

// Example 8:
console.log([[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.map(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
}));
// => [ undefined, undefined ];

// Example 9:
console.log([[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                     // it's an array
      return elem.map(number => number + 1);
    }
  });
}));
