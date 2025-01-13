//TASK 1
// Step 1. Using MySQL or MongoDB, import "maturadb.sql" or "appdb_xxxx_.json" files in a new 'maturadb' database. (available in the Materials)
// Step 2. Create user "director" with password "12345" and give him all necessary permissions over the maturadb database. (you can skip this step if you are using MongoDB)
// Step 3. Connect to your database.

// If you cannot create your own database, you can connect to:
// Host: ***********
// Port: ****
// Database: *******
// User: ********
// Password: ******

// You can login and view this database using phpMyAdmin here:
// https://s146.cyber-folks.pl/phpMyAdmin/

// Step 4. Display all 'browser' names (as a list, not in JSON format) stored in the 'browsers' table in the browser.

// Ex.
// Bot-bing
// Chrome
// Mozilla
// Mozilla Firefox

require('dotenv').config();
const express = require("express");
const path = require('path');
const mysql = require("mysql2");

const app = express();

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
  
  app.get('/api/browsers', (req, res) => {
    connection.query('SELECT name FROM browsers', (err, results) => {
      if (err) {
        console.error('Query error:', err);
        res.status(500).json({ error: 'Database query failed' });
        return;
      }
  
      res.json(results.map(row => row.name)); 
    });
  });
  
  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
  });