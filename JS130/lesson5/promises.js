// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a === 2) {
//     resolve('success');
//   } else {
//     reject('failed');
//   }
// });

// p.then((message) => {
//   console.log('This is in the then ' + message); // if resolves logs This is in the then success
// }).catch((message) => {
//   console.log('This is in the catch ' + message); // if rejects then logs This is in the catch failed
// });

// // promises are good for when you need to do something that is going to take a while (ex: download
// // an image from a different server) and you want to do something when its complete instead of 
// // making everything wait for it. We can also catch it to see if it failed therefore we can retry
// // or throw an error

// // promises are meant to replace callbacks example of working code:
// WITHOUT PROMISES
// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: 'User Left',
//       message: ':('
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: 'User Watching Cat Meme',
//       message: 'You < Cat'
//     });
//   } else {
//     callback('Thumbs up and Subscribe');
//   }
// }

// watchTutorialCallback((message) => {
//   console.log('Succes ' + message);
// }, ((error) => {
//   console.log(error.name + ' ' + error.message);
// }));

// // WITH PROMISES:
// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: 'User Left',
//         message: ':('
//       });
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: 'User Watching Cat Meme',
//         message: 'You < Cat'
//       });
//     } else {
//       resolve('Thumbs up and Subscribe');
//     }
//   });
// }

// watchTutorialPromise().then((message) => {
//   console.log('Success: ' + message);
// }).catch((error) => {
//   console.log(error.name + ' ' + error.message);
// });

// Another example:
const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
});

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree,
]).then((messages) => {
  console.log(messages);
}); // these all run at the same time so if one takes longer than the other, they will run at the 
// same time and won't have to wait for one another to finish before
// Promise.race (will return the first one finished -- same application)