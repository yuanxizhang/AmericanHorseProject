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
}, { timestamps: true });

<<<<<<< HEAD:ahp-server/db/models/Rescuer.js
const Rescuer = mongoose.model('Rescuer', rescuerSchema);
module.exports = Rescuer;
=======
const Organization = mongoose.model('Organization', organizationSchema);
export default Organization;
>>>>>>> 84debf650d10473a4bee44fd04266d03f8f641b9:ahp-server/db/models/Organizations.js
