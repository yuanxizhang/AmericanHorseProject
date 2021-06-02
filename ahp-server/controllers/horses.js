const express = require('express');
const router = express.Router();

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
		});
	});
});

module.exports = router;
