const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 64
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

})

module.exports = mongoose.model( 'User',  userSchema);