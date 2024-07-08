const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// lancement de l'application express
const app = express();

// Connection à la base de données SQLite
const db = new sqlite3.Database('./todo.db', (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log('Connected to the SQLite database.');
});
