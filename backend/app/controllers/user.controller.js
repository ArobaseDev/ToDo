const db = require('../models//User')
const User = db.User;

// Création d'un User 
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Récupération de tous les Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupération d'un User par son ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Modification d'un User par son ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Suppression d'un User par son ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json({ message: 'Utilisateur supprimé' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Suppression de tous les Users
exports.deleteAllUsers = async (req, res) => {
  try {
    const deletedCount = await User.deleteMany();
    res.json({ message: `${deletedCount.deletedCount} utilisateurs supprimés` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login des users
exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await user.matchPassword(req.body.password))) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Logout des users 
exports.logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
    await req.user.save();
    res.json({ message: 'Utilisateur déconnecté' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

