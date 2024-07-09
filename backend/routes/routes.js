
const express = require("express");
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/User.js");

// Init express router
const router = express.Router();

// Define routes
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

// Export the router
module.exports = router;