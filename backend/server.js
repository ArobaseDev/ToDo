const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const Task = require('./models/Task');
const mongoose = require('mongoose');

const app = express();
const PORT = 5200;

// Middleware
//app.use(cors());
app.use(express.json());

// Connexion à la base de données SQLite
// sequelize.sync().then(() => {
//   console.log('Database connected');
// }).catch((error) => {
//   console.error('Error connecting to the database:', error);
// });

// Routes
app.get('/api', (req, res) => {
  res.send('Welcome to the new version of To-Do API');
});

app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Task.findAll().then
    res.json(todos);
  } catch (error) {
    res.json({ error: error });
  }
})

app.get('/test',async (req, res) => {
  const jane = await Task.create({
    title: 'janedoe',
    description: 'lorem ipsum...',
  });
})

(async() => {
  try {
    await mongoose.connect("mongodb://localhost/todo");
    console.log("connexion MongoDB réussie..." )
  } catch (error) {
    console.log(error.message)
  }
})


// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
