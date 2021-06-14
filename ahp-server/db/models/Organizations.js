const mongoose = require('mongoose'),
	validator = require('validator');

const OrganizationSchema = new mongoose.Schema(
	{
		organizationName: {
			type: String,
			unique: true,
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
		street: {
					type: String,
					required: true,
					trim: true,
				},
		city: {
					type: String,
					required: true,
					trim: true,
				},
		state: {
					type: String,
					required: true,
					trim: true,
				},
		zipCode: {
					type: String,
					required: true,
					trim: true,
				},
		owner: {
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

const Organization = mongoose.model('organization', OrganizationSchema);
module.exports = Organization;
