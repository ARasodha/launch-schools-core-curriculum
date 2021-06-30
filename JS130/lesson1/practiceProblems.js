// Practice Problems: Emulating Iteration Methods
// Basic Emulation Problems:
// Problem 1:
function filter(array, callback) {
  let filteredItems = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (callback(array[idx])) filteredItems.push(array[idx]);
  }
  return filteredItems;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

// Problem 2:
function map(array, callback) {
  let transformedItems = [];
  for (let idx = 0; idx < array.length; idx++) {
    transformedItems.push(callback(array[idx]));
  }
  return transformedItems;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// Emulation and Using the reduce Method
// Problem 1:
function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let index = 0;

  if (accumulator === undefined) {
    accumulator = array[index];
    index = 1;
  }

  while (index < array.length) {
    accumulator = callback(accumulator, array[index]);
    index++;
  }

  return accumulator;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]

// Problem 2: Filter with Reduce
function filter(array, callback) {
  return array.reduce((filteredItems, val) => {
    if (callback(val)) {
      filteredItems.push(val);
    }

    return filteredItems;
  }, [])
}

let arr = [1, 2, 3];
let x = filter(arr, val => val % 2 === 0);
console.log(x)

// Problem 3: Map with Reduce
function map(array, callback) {
  return array.reduce((transformedItems, val) => {
    transformedItems.push(callback(val));

    return transformedItems;
  }, [])
}

let arr = [1, 2, 3];
let x  = map(arr, val => val + 1);
console.log(x);

// Bonus Problem - forEach for objects
function objForEach(object, callback) {
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      callback(property, object[property]);
    }
  }
}

let obj = {foo: 1, bar: 2, qux: 3};
objForEach(obj, (property, value) => {
  console.log(`the value of ${property} is ${value}`);
});
// the value of foo is 1
// the value of bar is 2
// the value of qux is 3
