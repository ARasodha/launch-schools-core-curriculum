const download1 = new Promise((resolve, reject) => {
  // code to download image 1
  resolve('Image 1 downloaded');
});

const download2 = new Promise((resolve, reject) => {
  // code to download image 2
  resolve('Image 2 downloaded');
});

const download3 = new Promise((resolve, reject) => {
  // code to download image 3
  resolve('Image 3 downloaded');
});

Promise.all([download1, download2, download3])
       .then(messages => console.log(messages));