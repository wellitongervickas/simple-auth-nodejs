// Imports
const mongoose = require('../database');

// Connection Database
mongoose.connect('mongodb://localhost', { useMongoClient: true });
mongoose.Promise = global.Promise;

// Exports
module.exports = mongoose;
