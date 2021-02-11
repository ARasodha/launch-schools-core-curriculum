// Extra Practice
// Medium 1 - Question 4:
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
let buff = [1, 2, 3, 4];
let maxSize = 4;
let newElem = 5;

console.log(addToRollingBuffer1(buff, maxSize, newElem));
console.log(addToRollingBuffer2(buff, maxSize, newElem));

// Medium 1 - Question 5:
console.log(0.3 + 0.6); // 0.899999999
console.log(0.3 + 0.6 === 0.9); // False

// Medium - Question 10:
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
console.log(bar(foo())); //no
