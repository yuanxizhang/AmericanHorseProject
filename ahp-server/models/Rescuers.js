const mongoose = require('../db/connection');

const rescuerSchema = new mongoose.Schema({
    name: String,
    birthDate: String,
    address: String,
    email: String,
    companyName: String,
    verifiedSocial: Number,
    horsesRescuing: [String],
});

const Rescuer = mongoose.model('Rescuer', rescuerSchema);
module.exports = Rescuer;