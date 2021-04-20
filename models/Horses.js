const mongoose = require('../db/connection');

const horseSchema = new mongoose.Schema({
    name: String,
    breed: String,
    birthDate: String,
    location: String,
    age: Number,
    color: String,
    gender: String,
    height: String,
    description: String,
    isAdopted: Boolean,
});

const Horse = mongoose.model('Horse', horseSchema);
module.exports = Horse;