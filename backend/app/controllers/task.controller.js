const db = require('../models/Task')
const Task = db.Task;

// Création d'une tâche
exports.createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const result = await newTask.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Récupération de toutes les tâches
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupération d'une tâche par son ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Modification d'une tâche par son ID
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Suppression d'une tâche par son ID
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
    res.json({ message: 'Tâche supprimée' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Suppression de toutes les tâches
exports.deleteAllTasks = async (req, res) => {
  try {
    const deletedCount = await Task.deleteMany();
    res.json({ message: `${deletedCount.deletedCount} tâches supprimées` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Marquage d'une tâche comme terminée
exports.completeTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { completed: true }, { new: true });
    if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Marquage d'une tâche comme non terminée
exports.uncompleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { completed: false }, { new: true });
    if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Récupération des tâches terminées
exports.getCompletedTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ completed: true }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupération des tâches non terminées
exports.getIncompleteTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ completed: false }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupération des tâches d'un utilisateur
exports.getUserTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupération des tâches d'un utilisateur non terminées
exports.getUserIncompleteTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.params.userId, completed: false }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupération des tâches d'un utilisateur terminées
exports.getUserCompletedTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.params.userId, completed: true }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

