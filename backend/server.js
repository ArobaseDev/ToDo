const express = require("express");
const cors = require("cors");
const router = require("./routes/routes.js");

// Import connction to the database
const bdd = require("./config/database");

// Init express app
const app = express();

/// port 3000
const port = 3000;

// Use express json middleware
app.use(express.json());
// Use cors middleware
app.use(cors());

// Connect to the database
bdd.authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Could not connect to the database:", err));

// Use the router
app.use(router);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});