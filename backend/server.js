// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connction to the database
import bdd from "./config/database.js";
// Import router
import Router from "./routes/routes.js";

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
app.use(Router);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});