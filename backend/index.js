const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const PORT = 3000;

// lancement de l'application express
const app = express();

// Middleware pour parse les données du corps des requêtes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connection à la base de données SQLite
const db = new sqlite3.Database('./sql/database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
    console.log('Connected to the database!');
});

// db.serialize let us run sqlite operations in serial order
db.serialize(() => {
  console.log('Serializing...');

  // Requêtes pour créer la table des utilisateurs
  db.run(`CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL
  )`, (err) => {
    if (err) {
      console.log(err);
      throw err;
    }
  });

  // Requêtes pour ajouter et enregister des utilisateurs
  db.run(`INSERT INTO User (username, password, email) VALUES ('hadil', 'hadil932', 'hadil@example.com'), ('desire', 'desire921', 'desire@example.com'), ('kevin', 'kevin910', 'kevin@example.com')`, (err) => {
    if (err) {
      console.log(err);
      throw err;
    }
  });

  // Requêtes pour créer les table des tâches
  db.run(`CREATE TABLE IF NOT EXISTS Task (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT 0,
    createdAt TEXT TIMESTAMP,
    finishedAt TEXT TIMESTAMP,
    user_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES User(user_id)
  )`, (err) => {
    if (err) {
      console.log(err);
      throw err;
    }
  });
});


/**
 * Partie Users
 */


// Création d'un utilisateur
app.post('/users', (req, res) => {
  const requête = req.body;
  const insert = `INSERT INTO User (username, password, email) VALUES (?,?,?)`;
  const params = [requête.username, requête.password, requête.email];
  db.run(insert, params, (err) => {
    if (err) {
      console.log(err);
    }
    res.status(201).json({ message: 'User created successfully' });
  });
})

// Récupération de tous les utilisateurs
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM User';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log(err);
    }
    res.json(rows);
  });
});

// Récupération d'un utilisateur par son ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const sql = 'SELECT * FROM User WHERE id =?';
  db.get(sql, [id], (err, row) => {
    if (err) {
      console.log(err);
    }
    res.json(row);
  });
});

// Modification d'un utilisateur
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const requête = req.body;
  const update = `UPDATE User SET username =?, password =?, email =? WHERE id =?`;
  db.run(update, [requête.username, requête.password, requête.email, requête.id], (err) => {
    if (err) {
      console.log(err);
    }
    res.json({ message: 'User updated successfully' });
  });
});

// Suppression d'un utilisateur
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const sql = 'DELETE FROM User WHERE id =?';
  db.run(sql, [id], (err) => {
    if (err) {
      console.log(err);
    }
    res.json({ message: 'User deleted successfully' });
  });
});


/**
 * Partie Tasks
 */


// Création d'une tâche
app.post('/tasks', (req, res) => {
  const requête = req.body;
  const insert = `INSERT INTO Task (title, description, is_done, createdAt, finishedAt, userId) VALUES (?,?,?,?,?,?)`;
  db.run(insert, [requête.title, requête.description, 0, new Date(), null, requête.userId], (err) => {
    if (err) {
      console.log(err);
    }
    res.status(201).json({ message: 'Task created successfully' });
  });
})

// Récupération de toutes les tâches
app.get('/tasks', (req, res) => {
  const sql = 'SELECT * FROM Task';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log(err);
    }
    res.json(rows);
  });
});

// Récupération d'une tâche par son ID
app.get('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const sql = 'SELECT * FROM Task WHERE id =?';
  db.get(sql, [id], (err, row) => {
    if (err) {
      console.log(err);
    }
    res.json(row);
  });
});

// Modification d'une tâche
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const requête = req.body;
  const update = `UPDATE Task SET title =?, description =?, is_done =?, createdAt =?, finishedAt =? WHERE id =?`;
  db.run(update, [requête.title, requête.description, requête.is_done, requête.createdAt, requête.finishedAt, requête.id], (err) => {
    if (err) {
      console.log(err);
    }
    res.json({ message: 'Task updated successfully' });
  });
});

// Suppression d'une tâche
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const sql = 'DELETE FROM Task WHERE id =?';
  db.run(sql, [id], (err) => {
    if (err) {
      console.log(err);
    }
    res.json({ message: 'Task deleted successfully' });
  });
});

// Lancement du serveur sur le port 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});