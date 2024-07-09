require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./app/routes/user')
const taskRoutes = require('./app/routes/task');
// const taskRoutes = require('./app/controllers/task.controller')
// const userRoutes = require('./app/controllers/user.controller')

const app = express();
const PORT = process.env.PORT || 5200;

// Routes
//const {userRoutes} = require('./app/routes/user.js')
//const taskRoutes = require('./app/routes/task.js');


// Middleware
//app.use(cors());
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//
 app.use('/api/tasks', () => taskRoutes.getAllTasks)
 app.use('/api/tasks', () => taskRoutes.createTask)

app.use('/api/users', () =>{
  userRoutes.getAllUsers
})



mongoose
  .connect(
    process.env.DATABASE_URI,
    {
    }
  )
.then(() => {
  console.log('Connected to MongoDB database');
  // Démarrer le serveur
  app.listen(PORT, () =>
  {
    console.log(`Server is running on port : ${PORT}`);
  });
})

module.exports = app 




