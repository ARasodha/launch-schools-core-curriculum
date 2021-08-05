// Async and Await is syntactical sugar for promises

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log('Making Request to ' + location);
    if (location === 'Google') {
      resolve('Google says hi');
    } else {
      reject('We can only talk to Google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra Information + ${response}`);
  });
}

// Running Promises normally 
// makeRequest('Google').then(response => {
//   console.log('Response has been received');
//   return processRequest(response);
// }).then(processedResponse => {
//   console.log(processedResponse);
// }).catch(err => {
//   console.log(err);
// });

// Running Promises with Async/await - (we need a function that our awaiting code is inside of)
async function doWork() {
  try {
    const response = await makeRequest('Facebook'); 
    console.log('Response has been received');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
}
doWork();