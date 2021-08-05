// Repeating Execution with setInterval:

// setInterval() - is similar to setTimeout but instead of invoking the callback once, it invokes it
// repeatedly at intervals until told to stop
// Note: like setTimeout, setInterval is not part of the JS specification, however, some environments
// make it available

var id = setInterval(function() {console.log('hello');}, 2000);
setTimeout(() => clearInterval(id), 11000); // clearInterval() - takes the setInterval variable
// as an argument and stops it after the specified time - i just coupled it with setTimeout()
// so that it would happen on its own (don't need to though)


// ex: perhaps we need to auto-save a user's work in a large web form:
function save() {
  // Send the form values to the server for safekeeping
}

// Call save() every 10 seconds
var id = setInterval(save, 10000);

// Later, perhaps after the user submits the form
// clearInterval(id);

// Problems
// E1:
function startCounting() {
  let number = 1;
  setInterval(function() {
    console.log(number);
    number += 1;
  }, 1000);
}

startCounting();

// E2:
function startCounting() {
  let number = 1;
  let count = setInterval(function() {
    console.log(number);
    number += 1;
  }, 1000);

  setTimeout(() => clearInterval(count), 11000);
}

startCounting();

// Alternative Solution:
function startCounting() {
  let count = 0;
  let counterId = setInterval(function() {
    count += 1;
    console.log(count);
  }, 1000);

  return counterId;
}

function stopCounting(counterId) {
  clearInterval(counterId);
}

let counterId = startCounting();
// some time later
stopCounting(counterId);