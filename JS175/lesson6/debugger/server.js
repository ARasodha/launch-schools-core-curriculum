const http = require("http");

const host = "localhost";
const port = 8000;

const greetings = ["Hello world", "Hola mundo", "Bonjour le monde", "Hallo Welt", "Salve mundi"];
const addPrefix = (greeting, prefix) => `${prefix} ${greeting}`;

const getGreetings = function (prefix) {
  let greeting = greetings[Math.floor(Math.random() * greetings.length)];

  return addPrefix(greeting, prefix);
}

const requestListener = function (req, res) {
  let message = getGreetings('=>');
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "${message}"}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});