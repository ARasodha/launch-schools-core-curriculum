// Lesson Example - Executing SQL Statements from JavaScript
const { Client } = require('pg');
let client = new Client({database: 'films'});


async function logQuery(queryText) {
  await client.connect();

  let data = await client.query(queryText);
  console.log(data.rows[0].name);
  client.end();
}

logQuery('SELECT * FROM directors');

// Practice Problems:
// 1.
let client = new Client({database: 'films'});


async function logQuery(queryText) {
  await client.connect();

  let data = await client.query(queryText);
  console.log(data.rows[0].title); // <--- 
  client.end();
}

logQuery(`SELECT * FROM films JOIN directors
ON films.director_id = directors.id
WHERE name = 'Sidney Lumet'`);

// 2.
let client = new Client({database: 'films'});


async function logQuery(queryText) {
  await client.connect();

  let data = await client.query(queryText);
  console.log(data.rows[1].duration);  
  client.end();
}

logQuery(`SELECT * FROM films WHERE director_id = 3 ORDER BY title DESC`); // <---

// 3.
let client = new Client({database: 'films'});

async function logQuery(queryText) {
  await client.connect();

  let data = await client.query(queryText);
  console.log(data.rows[2].count); // <--- 
  client.end();
}

logQuery(`SELECT count(id) FROM films WHERE duration < 110 GROUP BY genre`);