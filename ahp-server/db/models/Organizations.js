const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new mongoose.Schema({
    name: String,
    birthDate: String,
    address: String,
    email: String,
    companyName: String,
    verifiedSocial: Number,
    horses : [{ type: Schema.Types.ObjectId, ref: 'Horse' }]
});

const Organization = mongoose.model('Organization', organizationSchema);
export default Organization;