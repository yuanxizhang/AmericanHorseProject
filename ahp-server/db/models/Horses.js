const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const horseSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    gender: String,
    location: String,
    size: String,
    color: String,
    capabilities: String, 
    urgency: String,
    isAdopted: {type: Boolean, default: false, required: true },
    organization : { type: Schema.Types.ObjectId, ref: 'Organization' },
    adoptionRequests : [{ type: Schema.Types.ObjectId, ref: 'AdoptionRequest' }]
}, { timestamps: true });

const Horse = mongoose.model('Horse', horseSchema);
module.exports = Horse;