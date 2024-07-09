const user = require('../controllers/user.controller.js');
const router = require('express').Router();

// User routes
router.post('/register',() => user.register);
router.post('/login', () =>user.login);
router.get('/logout', () => user.logout);
router.get('/', () => user.getAllUsers);
router.get('/:id', () => user.getUserById);



module.exports = router;