const Organization = require('../db/models/Organizations');

const auth = require('../middleware/authentication/index');

const { check, validationResult } = require('express-validator');

// @route GET api/organization/me
// @desc Get current user organization
// @access Private
exports.getCurrentOrg = async (req, res) => {
	try {
		const organization = await Organization.findOne({
			user: req.user.id,
		}).populate('user', ['name', 'email']);

		if (!organization) {
			res.status(400).json({ msg: 'This user does not own an organization' });
		}
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
};

// @route POST api/organization
// @desc Create or update user organization
// @access Private
exports.createOrUpdateOrg =
	([
		[
			check('organizationName', 'The name of the organization is required')
				.not()
				.isEmpty(),
			check('email', 'Email is required').not().isEmpty().isEmail(),
			check('phone', 'Phone number is required').not().isEmpty(),
			check('website', 'Website link is required').not().isEmpty(),
		],
	],
	async (req, res) => {
		console.log('Inside');
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			organizationName,
			email,
			phone,
			website,
			street,
			city,
			state,
			zipCode,
		} = req.body;

		const organizationFields = {};
		organizationFields.user = req.user.id;
		if (organizationName)
			organizationFields.organizationName = organizationName;
		if (email) organizationFields.email = email;
		if (phone) organizationFields.phone = phone;
		if (website) organizationFields.website = website;
		if (street) organizationFields.street = street;
		if (city) organizationFields.city = city;
		if (state) organizationFields.state = state;
		if (zipCode) organizationFields.zipCode = zipCode;

		try {
			let organization = await Organization.findOne({ user: req.user.id });

			if (organization) {
				// Update
				organization = await Organization.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: organizationFields },
					{ new: true }
				);
				return res.json(organization);
			}
			// Create
			organization = new Organization(organizationFields);

			await organization.save();
			res.json(organization);
		} catch (err) {
			console.error(err);
			res.status(500).send('Server Error');
		}
	});

// @route GET api/organization
// @desc GET all organizations
// @access Public
exports.getAllOrganizations = async (req, res) => {
	try {
		const organizations = await Organization.find().populate('user', [
			'name',
			'email',
		]);
		res.json(organizations);
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error');
	}
};

// @route GET api/organization/user/:user_id
// @desc Get organization by user ID
// @access Public
exports.getOrgByID = async (req, res) => {
	try {
		const organization = await Organization.findOne({
			user: req.params.user_id,
		}).populate('user', ['name', 'email']);

		if (!organization)
			return res
				.status(400)
				.json({ msg: 'This user does not own an organization' });

		res.json(organization);
	} catch (err) {
		console.error(err.message);
		if (err.kind == 'ObjectId') {
			return res
				.status(400)
				.json({ msg: 'This user does not own an organization' });
		}
		res.status(500).send('Server Error');
	}
};

// @route DELETE api/organization
// @desc Delete organization & user
// @access Private
exports.deleteOrg = async (req, res) => {
	try {
		// Remove organization
		await Organization.findOneAndRemove({ user: req.user.id });

		await User.findOneAndRemove({ _id: req.user.id });
		res.json({ msg: 'User removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
};
