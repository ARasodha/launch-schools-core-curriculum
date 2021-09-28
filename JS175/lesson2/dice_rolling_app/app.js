const HTTP = require('http');
const PORT = 3000;
const URL = require('url').URL;

function getParams(path) {
  const myURL = new URL(path, `http://localhost'${PORT}`);
  return myURL.searchParams;
}

function rollDie(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function rollDice(params) {
  let rolls = Number(params.get('rolls'));
  let sides = Number(params.get('sides'));
  let body = '';

  for (let idx = 0; idx < rolls; idx++) {
    body += `${rollDie(1, sides)}\n`;
  }

  return body;
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  if (path === '/favicon.ico') {
    res.statusCode = 400;
    res.end();
  } else {
    let content = rollDice(getParams(path));

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.write(`${content}\n`);
    res.write(`${method} ${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
