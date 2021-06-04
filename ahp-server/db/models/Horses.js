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
    Urgency: String,
    isAdopted: {type: Boolean, default: false, required: true },
    Organization : { type: Schema.Types.ObjectId, ref: 'Organization' },
    adoptionRequests : [{ type: Schema.Types.ObjectId, ref: 'AdoptionRequest' }]
}, { timestamps: true });

const Horse = mongoose.model('Horse', horseSchema);
module.exports = Horse;