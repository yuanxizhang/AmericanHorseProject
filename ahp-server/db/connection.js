const mongoose = require('mongoose');

mongoose.Promise = Promise;

const mongoURI = process.env.NODE_ENV === 'production' ? process.env.DB_URL : '';

module.exports = mongoose;