const pug = require('pug');
const express = require('express');
const app = express();
const PORT = 3000;

// const compiledFunction = pug.compileFile('index.pug');

app.set('view engine', 'pug');
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
 
app.get('/', (req, res) => {
  res.render('first', { "key": "value"});
});

app.get('/second', (req, res) => {
  res.render('second');
});

// let balance = { money: "$100", recentTransaction: "$5000" }

// app.get('/accounts', (req, res) => {
//   res.render('accounts', balance);
// })