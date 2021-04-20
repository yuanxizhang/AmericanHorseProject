const mongoose = require('../db/connection');

const adopterSchema = new mongoose.Schema({
    name: String,
    birthDate: String,
    occupation: String,
    address: String,
    phone: String,
    email: String,
    verifiedSocial: Number,
    horsesAdopting: [String],    
});

const Adopter = mongoose.model('Adopter', adopterSchema);
module.exports = Adopter;

/* 
orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceOrder'
      }
    ]
    bikeshopSchema.virtual('cyclists', {
  ref: 'Cyclist',
  localField: '_id',
  foreignField: 'bikeshop'
});
website: {
      type: String,
      trim: true
    },
*/