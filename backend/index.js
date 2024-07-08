const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const PORT = 3000;

// lancement de l'application express
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Todo API!');
});

// Connection à la base de données SQLite
const db = new sqlite3.Database('./sql/todo.db', (err) => {
  if (err) {
    console.error("Error opening database" + err.message);
  } else {

    db.run(`CREATE TABLE IF NOT EXISTS User (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL
    )`, (err) => {
      if (err) {
        console.log("Table User already exists.");
      }
      let insert = `INSERT INTO User (username, password, email) VALUES (?,?,?)`;
      db.run(insert, ['hadil', 'hadil932', 'hadil@example.com']);
      db.run(insert, ['desire', 'desire921', 'desire@example.com']);
      db.run(insert, ['kevin', 'kevin910', 'kevin@example.com']);
    });

    db.run(`CREATE TABLE IF NOT EXISTS Task (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      is_done BOOLEAN DEFAULT 0,
      createdAt TIMESTAMP,
      finishedAt TIMESTAMP,
      userId INTEGER NOT NULL
      FOREIGN KEY(userId) REFERENCES User(id)
    )`, (err) => {
      if (err) {
        console.log("Table Task already exists.");
      }
      let insert = `INSERT INTO Task (title, description, is_done, createdAt, finishedAt, userId) VALUES (?,?,?,?,?,?)`;
      db.run(insert, ['A faire', 'Faire des chocolats', 0, new Date(), null, 1]);
      db.run(insert, ['A faire', 'Faire des pommes', 0, new Date(), null, 2]);
      db.run(insert, ['A faire', 'Faire des croissants', 0, new Date(), null, 3]);
    });
  }
});

/**
 * Partie Users
 */

// Création d'un utilisateur
app.post('/users', (req, res) => {
  const { username, password, email } = req.body;
  const insert = `INSERT INTO User (username, password, email) VALUES (?,?,?)`;
  db.run(insert, [username, password, email], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating user' });
    }
    res.status(201).json({ message: 'User created successfully' });
  });
})



// Lancement du serveur sur le port 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});