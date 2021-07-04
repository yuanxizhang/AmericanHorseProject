const Horse = require('../db/models/Horses');

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
			res.json(horse);
		} catch(err) {
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
