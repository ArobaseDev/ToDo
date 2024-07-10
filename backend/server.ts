import express from 'express';
import sequelize from 'sequelize/types/sequelize';

// Application express instance
const app = express();
// port number
const port = process.env.PORT || 3000;

// middleware body parser middle
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Connection to the database


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});