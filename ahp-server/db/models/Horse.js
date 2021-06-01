const mongoose = require("mongoose");

const horseSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    gender: String,
<<<<<<< HEAD:ahp-server/db/models/Horse.js
    height: String,
    imageURL: String,
    description: String,
    adoptionFee: Number,
=======
    location: String,
    size: String,
    color: String,
    capabilities: String, 
    Urgency: String,
>>>>>>> 1486e134682a617e0e6a0e80651cd5441b4d6b23:ahp-server/db/models/Horses.js
    isAdopted: {type: Boolean, default: false, required: true },
    Organization : { type: Schema.Types.ObjectId, ref: 'Organization' },
    adoptionRequests : [{ type: Schema.Types.ObjectId, ref: 'AdoptionRequest' }]
}, { timestamps: true });

const Horse = mongoose.model('Horse', horseSchema);
module.exports = Horse;