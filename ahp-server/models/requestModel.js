import mongoose from 'mongoose'

const requestSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    horsesToAdopt: [
      {
        horse: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Horse',
        },
      },
    ],
    homeAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      state: { type: String, required: true },
    },
    transportationFee: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalFee: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isApproved: {
      type: Boolean,
      required: true,
      default: false,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Request = mongoose.model('Request', requestSchema)

export default Request
