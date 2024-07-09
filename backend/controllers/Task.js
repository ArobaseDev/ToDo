const { Task } = require("./models/Task");

// Get All Tasks
exports.getTasks = async (req, res) => {
    try {
      const task = await Task.findAll();
      res.json(task);
    } catch (error) {
      console.error(error);
    }
  };
  
  // Get Task by ID
  exports.getTaskById = async (req, res) => {
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

  // Get Tasks by User ID
  exports.getTasksByUserId = async (req, res) => {
    try {
      const task = await Task.findAll({
          where: { 
              user_id: req.params.user_id 
          },  
      });
      res.json(task);
    } catch (error) {
      console.error(error);
    }
  };
  
  // Create a new Task
  exports.createTask = async (req, res) => {
    try {
      await Task.create(req.body);
      res.json({ 
          "message": "Task created successfully"
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  // Update a Task
  exports.updateTask = async (req, res) => {
    try {
      const task = await Task.update(req.body, {
          where: {
              id: req.params.id
          }
      });
      res.json({
        "message": "Task updated successfully"
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Delete a Task
  exports.deleteTask = async (req, res) => {
    try {
      const task = await Task.destroy({
          where: {
              id: req.params.id
          }
      });
      res.json({
          "message": "Task deleted successfully"
      });
    } catch (error) {
      console.error(error);
    }
  };