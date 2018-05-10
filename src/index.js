// Imports
const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();

// Uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Default
app.get('/', (req, res) => {
  res.send('Connected!')
});

// Initialize Service
app.listen(3000);
