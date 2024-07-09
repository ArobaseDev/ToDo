// import express
import express from "express";

// import User Controller
import { getUsers, getUserById, createUser, updateUser, deleteUser } from "./controllers/UserController.js";

// Init express router
const router = express.Router();

// Define routes
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

// Export the router
export default router;