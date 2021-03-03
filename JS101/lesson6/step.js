function square(num) {
  return num * num;
}

const myArr = [1, 2, 3, 4, 5];

let squares = myArr.map(num => square(num));

console.log(squares);
