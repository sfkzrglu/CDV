//TASK 2
// Step 1. Create a form that allows the user to enter one word.
// Step 2. Through a POST form, this word is sent to your script and using the 'dictionary' table/collection in the 'maturadb' Database, the system searches for this word.
// Step 3. If the system finds this word, the system displays the word in English as in the example below. If the system does not find this word, the system displays the message "Unknown word".


require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const connection  = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
});

connection.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL database');
});


app.post('/translate', (req, res) => {
  const word = req.body.word;


  const query = 'SELECT en FROM dictionary WHERE sq = ?';
  connection.query(query, [word], (err, results) => {
    if (err) {
      console.error('Query error:', err);
      res.status(500).send('Database query failed');
      return;
    }


    if (results.length > 0) {
      const translation = results[0].en;
      res.send(`
        <p>The English word for "<strong>${word}</strong>" is "<strong>${translation}</strong>".</p>
        <a href="/">Translate another word</a>
      `);
    } else {
      res.send(`
        <p>The word "<strong>${word}</strong>" is unknown.</p>
        <a href="/">Translate another word</a>
      `);
    }
  });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});