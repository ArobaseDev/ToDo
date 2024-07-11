const express = require('express');
const router = express.Router();
const task = require('../controllers/task.controller.js');

// Task routes
router.post('/tasks', task.createTask);
router.get('/tasks', task.getAllTasks);
router.get('/tasks/:id', task.getTaskById);
router.put('/tasks/:id', task.updateTask);
router.delete('/tasks/:id', task.deleteTask);
router.delete('/tasks', task.deleteAllTasks);
router.patch('/tasks/:id/complete', task.completeTask);
router.patch('/tasks/:id/uncomplete', task.uncompleteTask);
router.get('/tasks/completed', task.getCompletedTasks);
router.get('/tasks/incomplete', task.getIncompleteTasks);
router.get('/tasks/user/:userId', task.getUserTasks);
router.get('/tasks/user/:userId/incomplete', task.getUserIncompleteTasks);
router.get('/tasks/user/:userId/completed', task.getUserCompletedTasks);

module.exports = router