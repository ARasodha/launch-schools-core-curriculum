
function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;

  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum++) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);
     startInteger = row[row.length - 1] + 2;
  }
  return sumRow(rows[rows.length - 1]); // TODO: sum final row and return sum
}

function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;
  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}

function sumRow(row) {
  return row.reduce((accum, val) => accum += val, 0);
}


// row number: 1 --> sum of integers in row: 2
// row number: 2 --> sum of integers in row: 10
// row number 4 --> sum of integers in row: 68

console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68

// 1. Create an empty 'rows' array to contain all of the rows
// 2. Create a 'row' and add it to the overall 'rows' array
// 3. Repeat step 2 until all the necessary rows have been created
//   - All the rows have been created when the length of the 'rows' array is equal to the input
// 4. Sum the final row
// 5. Return the sum

// [
// [2],
// [4, 6],
// [8, 10, 12],
// [14, 16, 18, 20]
// ....
// ]

// Calculating the Starting Integer
// Rule: First integer of a row equal to last integer of preceding row + 2
// Algorithm:
// - Get the last row from the rows array
// - G et the last integer of that row
// - Add 2 to the integer




// start: 2, length: 1 --> [2]
// start: 4, --> length: 2 --> [4, 6]
// start: 8, length: 3 ---> [8, 10, 12]

// console.log(createRow(2, 1)); // [2]
// console.log(createRow(4, 2)); // [4, 6]
// console.log(createRow(8, 3)); // [8, 10, 12]

// Algorithm
// 1. Create an empty 'row' to contain the Integers
// 2. Add the starting integer
// 3. Increment the starting integer by 2 to get the next integer in sequence
// 4. Repeat steps 2 and 3 until the array has reached the correct length
// 5. Return the array


// Start the loop
// - Add start integer to the row array
// - Incremenet start integer by 2
// - Break out of the loop - if length of row array equals rowLength
