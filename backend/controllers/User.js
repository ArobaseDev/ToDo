// Import the User model
import User from "./models/User.js";

// Get All Users
app.get("/api/users", async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    console.error(error);
  }
});

// Get User by ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findAll({
        where: { 
            id: req.params.id 
        },  
    });
    res.json(user[0]);
  } catch (error) {
    console.error(error);
  }
});

// Create a new User
app.post("/api/users", async (req, res) => {
  try {
    await User.create(req.body);
    res.json({ 
        "message": "User created successfully"
    });
  } catch (error) {
    console.error(error);
  }
});

// Update a User
app.put("/api/users/:id", async (req, res) => {
  try {
    const user = await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.json({
        "message": "User updated successfully"
    });
  } catch (error) {
    console.error(error);
  }
});

// Delete a User
app.delete("/api/users/:id", async (req, res) => {
  try {
    const user = await User.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json({
        "message": "User deleted successfully"
    });
  } catch (error) {
    console.error(error);
  }
});