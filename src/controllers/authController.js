// Imports
const express = require('express');
const User = require('../models/users');

// Initialize Routes
const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
  try {

    const user = await User.create(req.body);
    return res.send({ user });

  } catch (error) {

    return res.status(400).send({ error: 'Registration Failed'})
  }
});

// Exports
module.exports = app => app.use('/auth', router);
