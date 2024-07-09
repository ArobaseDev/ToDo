// Import the User model
const { User } = require ("../models/User");

// Get All Users
exports.getUsers = async (req, res) => {
  try {
    const user = await this.findAll();
    res.json(user);
  } catch (error) {
    console.error(error);
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await this.findAll({
        where: { 
            id: req.params.id 
        },  
    });
    res.json(user[0]);
  } catch (error) {
    console.error(error);
  }
};

// Create a new User
exports.createUser = async (req, res) => {
  try {
    await this.create(req.body);
    res.json({ 
        "message": "User created successfully"
    });
  } catch (error) {
    console.error(error);
  }
};

// Update a User
exports.updateUser = async (req, res) => {
  try {
    const user = await this.update(req.body, {
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
};

// Delete a User
exports.deleteUser = async (req, res) => {
  try {
    const user = await this.destroy({
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
};
