const mongoose = require("mongoose");

const adopterSchema = new mongoose.Schema({
    name: String,
    birthDate: String,
    occupation: String,
    address: String,
    phone: String,
    email: String,
    verifiedSocial: Number,
    adoptionRequests : [{ type: Schema.Types.ObjectId, ref: 'AdoptionRequest' }]   
});

const Adopter = mongoose.model('Adopter', adopterSchema);
export default Adopter;

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