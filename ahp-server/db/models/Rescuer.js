const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rescuerSchema = new mongoose.Schema({
    name: String,
    birthDate: String,
    address: String,
    email: String,
    companyName: String,
    verifiedSocial: Number,
    horses : [{ type: Schema.Types.ObjectId, ref: 'Horse' }]
}, { timestamps: true });

const Rescuer = mongoose.model('Rescuer', rescuerSchema);
module.exports = Rescuer;