// Walkthrough: Build a forEach Method
let arr = [1, 2, 3, 4];

// Built in Array.prototype.forEach method 
arr.forEach(value => console.log(value * value));

// Custom forEach function
function forEach(array, callback) {
  for (let idx = 0; idx < array.length; idx++) {
    callback(array[idx]);
  }
}

forEach(arr, value => console.log(value * value));

// Defining the execution context (thisArg) - Built-in
class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo('Item');
[1, 2, 3].forEach(foo.showItem, foo);
[4, 5, 6].forEach(foo.showItem);

// Custom
function forEach(array, callback, thisArg) {
  for (let idx = 0; idx < array.length; idx++) {
    callback.call(thisArg, array[idx]);
  }
}

forEach(["a", "b", "c"], item => console.log(item));
forEach([1, 2, 3], foo.showItem, foo);
forEach([4, 5, 6], foo.showItem);

// Passing Index Argument Built-in
["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});

// Custom
function forEach(array, callback, thisArg) {
  for (let idx = 0; idx < array.length; idx++) {
    callback.call(thisArg, array[idx], idx, array);
  }
}

forEach(['a', 'b', 'c'], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
})