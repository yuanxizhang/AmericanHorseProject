const mongoose = require('mongoose');
const validator = require('validator');


const shelterSchema = new mongoose.Schema(
	{
		shelterName: {
			type: String,
			trim: true,
			required: true,
		},
		email: {
			type: String,
			trim: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error('Invalid email');
				}
			},
			required: true,
		},
		phone: {
			type: String,
			trim: true,
			required: true,
		},
		website: {
			type: String,
			trim: true,
			required: true,
		},
		shelterAddress: {
            address: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true },
            state: { type: String, required: true },
          },
		shelterManager: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true, toJSON: { virtual: true } }
);

OrganizationSchema.virtual('horses', {
	ref: 'User',
	localField: '_id',
	foreignField: 'organization',
});

const Shelter = mongoose.model('Shelter', shelterSchema)

export default Shelter

