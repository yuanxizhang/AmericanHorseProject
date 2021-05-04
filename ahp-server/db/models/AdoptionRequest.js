const mongoose = require("mongoose");

const adoptionSchema = new mongoose.Schema({
    id: { type: 'String', required: true },
    dateOfRequest: { ype: Date, default: Date.now(), required: true },
    aproved: {type: Boolean, default: false, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    horse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Horse"
    }
}, { timestamps: true });

adoptionSchema.methods.toJSON = function () {
  return {
    id: this._id,
    dateOfRequest: this.dateOfRequest,
    approved: this.approved,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    user: this.user.toJSON(),
    horse: this.horse.toJSON(),
  };
};

export default mongoose.model('AdoptionRequest', adoptionSchema);