// Imports
const mongoose = require('mongoose');

// Schemas
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Exports
const User = mongoose.model('User', userSchema);
module.exports = User;
