const { Task } = require("./models/Task");

// Get All Users
exports.getUsers = async (req, res) => {
    try {
      const user = await User.findAll();
      res.json(user);
    } catch (error) {
      console.error(error);
    }
  };
  
  // Get User by ID
  exports.getUserById = async (req, res) => {
    try {
      const task = await Task.findAll({
          where: { 
              id: req.params.id 
          },  
      });
      res.json(task[0]);
    } catch (error) {
      console.error(error);
    }
  };
  
  // Create a new User
  exports.createTask = async (req, res) => {
    try {
      await User.create(req.body);
      res.json({ 
          "message": "User created successfully"
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  // Update a User
  exports.updateTask = async (req, res) => {
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
  };
  
  // Delete a User
  exports.deleteTask = async (req, res) => {
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
  };