// Examples of the same code used synchronously and asynchronously with callbacks,
// promises and async/await -- when running code comment out other sections

// Synchronous Example
function getData() {
  console.log('2. Returning instantly available data.');
  return [{name: 'Avi'}, {name: 'Grace'}];
}

function main() {
  console.log('1. Starting Script');
  const data = getData();
  console.log(`3. Data is currently ${JSON.stringify(data)}`);
  console.log('4. Script Ended');
}

main();
// logs:
// 1. Starting Script
// 2. Returning instantly available data.
// 3. Data is currently [{"name":"Avi"},{"name":"Grace"}]
// 4. Script Ended

// Asynchronous Example
function getData() {
  console.log("2. Getting data from internet, please wait.")
  return setTimeout(function(){
    console.log("3. Returning data from internet after 1000 milliseconds.")
    return [{name: "Avi"}, {name: "Grace"}]
  }, 1000)
}

function main() {
  console.log("1. Starting Script")
  const data = getData()
  console.log(`4. Data is currently ${data}`)
  console.log("5. Script Ended")    
}

main();
// logs
// 1. Starting Script
// 2. Returning instantly available data.
// 4. Data is currently [object Object]
// 5. Script Ended
// 3. Returning data from internet after 1000 milliseconds.

// Synchronous Promise
function getData() {
  console.log('2. Getting data from internet, please wait.');
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('3. Returning data from internet.');
      resolve([{name: "Avi"}, {name: "Grace"}]);
    }, 1000);
  });
}

function main() {
  console.log('1. Starting Script');
  getData().then(function(data) {
    console.log(`4. Data is currently ${JSON.stringify(data)}`);
    // The entire rest of our program would have to be nested
    // within this callback for 'data' to be fully available.
    console.log('5. Script Ended');
  });
}

main();
// logs
// 1. Starting Script
// 2. Getting data from internet, please wait.
// 3. Returning data from internet.
// 4. Data is currently [{"name":"Avi"},{"name":"Grace"}]
// 5. Script Ended

// Async / Await
function getData() {
  console.log('2. Getting data from internet, please wait.');
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('3. Returning data from internet.');
      resolve([{name: "Avi"}, {name: "Grace"}]);
    }, 1000);
  });
}

async function main() {
  console.log('1. Starting script');
  const data = await getData();
  console.log(`Data is currently ${JSON.stringify(data)}`);
  console.log('5. Script Ended');
}

main();
// logs
// 1. Starting script
// 2. Getting data from internet, please wait.
// 3. Returning data from internet.
// Data is currently [{"name":"Avi"},{"name":"Grace"}]
// 5. Script Ended