const mongoose = require("mongoose");

const horseSchema = new mongoose.Schema({
    name: String,
    breed: String,
    birthDate: String,
    location: String,
    age: Number,
    color: String,
    gender: String,
    height: String,
    imageURL: String,
    description: String,
    adoptionFee: Number,
    isAdopted: {type: Boolean, default: false, required: true },
    rescuer : { type: Schema.Types.ObjectId, ref: 'Rescuer' },
    adoptionRequests : [{ type: Schema.Types.ObjectId, ref: 'AdoptionRequest' }]
}, { timestamps: true });

const Horse = mongoose.model('Horse', horseSchema);
module.exports = Horse;