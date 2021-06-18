const Horse = require('../db/models/Horses');

<<<<<<< HEAD
router.get('/horses', (req, res) => {
	Horse.find({}).then((horse) => {
		res.json(horse);
	});
});

router.get('horses/:id', (req, res) => {
	let parameter = req.params.id;
	Horse.findById(parameter).then((horse) => {
		res.json(horse);
	});
});

router.post('/horses', (req, res) => {
	Horse.create(req.body).then((horse) => {
		res.json(horse);
	});
});

router.put('horses/:id', (req, res) => {
	let updatedHorse = req.body;
	Horse.findOneAndUpdate({ _id: req.params.id }, updatedHorse, {
		new: true,
	}).then(() => {
		Horse.find({}).then((horse) => {
			res.json(horse);
		});
	});
});

router.delete('horses/:id', (req, res) => {
	Horse.findByIdAndDelete({ _id: req.params.id }).then(() => {
		Horse.find({}).then((horse) => {
=======
const auth = require('../middleware/authentication/index');

const { check, validationResult } = require('express-validator');

exports.getAllHorses = async (req, res) => {
	try {
		const horses = await Horse.find().populate('horse', ['name', 'breed']);
		res.json(horses);
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error');
	}
};

exports.getHorseById = async (req, res) => {
	try {
		const horse = await Horse.findOne({
			horse: req.params.horse_id,
		}).populate('horse', ['name', 'breed']);

		if (!horse) {
			res.status(400).json({ msg: 'This horse ID is not valid' });
		}
		res.json(horse);
	} catch (err) {
		console.error(err.message);
		if (err.kind == 'ObjectId') {
			res.status(400).json({ msg: 'Horse ID does not exist' });
		}
		res.status(500).send('Server Error');
	}
};

exports.createOrUpdateHorse =
	([
		auth,
		[
			check('name', 'Please enter horse name').not().isEmpty(),
			check('breed', 'Please enter the breed of the horse').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			name,
			breed,
			age,
			gender,
			location,
			size,
			color,
			capabilities,
			urgency,
		} = req.body;

		const horseFields = {};
		horseFields.horse = req.horse.id;
		if (name) horseFields.name = name;
		if (breed) horseFields.breed = breed;
		if (age) horseFields.age = age;
		if (gender) horseFields.gender = gender;
		if (location) horseFields.location = location;
		if (size) horseFields.size = size;
		if (color) horseFields.color = color;
		if (capabilities) horseFields.capabilities = capabilities;
		if (urgency) horseFields.urgency = urgency;

		try {
			let horse = await Horse.findOne({ horse: req.horse.id });

			if (horse) {
				// Update
				horse = await Horse.findOneAndUpdate(
					{ horse: req.horse.id },
					{ $set: horseFields },
					{ new: true }
				);
				return res.json(horse);
			}
			// Create
			horse = new Horse(horseFields);

			await horse.save();
>>>>>>> 7c6519c0b6b0701618549a01a7c7f6fa014b6ded
			res.json(horse);
		} catch (err) {
			console.error(err);
			res.status(500).send('Server Error');
		}
	});

exports.deleteHorse = async (req, res) => {
	try {
		// Delete horse profile
		await Horse.findOneAndRemove({ horse: req.horse.id });
		res.json({ msg: 'Horse profile deleted' })
	} catch(err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
}
