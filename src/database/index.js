// Imports
const mongoose = require('mongoose');

// Connection Database
mongoose.connect('mongodb://localhost/dbtest');
mongoose.Promise = global.Promise;

// Exports
module.exports = mongoose;
