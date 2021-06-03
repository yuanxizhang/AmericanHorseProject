// const express = require('express');
// const router = express.Router();

// const Horse = require('../db/models/Horses');

const express = require("express");
const Horses = require("../db/models/Horses");

exports.getAllHorses = (req, res) => {
  console.log('inside horses')
	Horses.find({}).then((horse) => {
		res.json(horse);
	});
};

exports.getHorseById = (req, res) => {
	let parameter = req.params.id;
	Horses.findById(parameter)
  .then((horse) => {
		res.json(horse);
	});
};

// router.get('/:id', (req, res) => {
// 	let parameter = req.params.id;
// 	Horse.findById(parameter).then((horse) => {
// 		res.json(horse);
// 	});
// });



// router.post('/', (req, res) => {
// 	Horse.create(req.body).then((horse) => {
// 		res.json(horse);
// 	});
// });

// router.put('/:id', (req, res) => {
// 	let updatedHorse = req.body;
// 	Horse.findOneAndUpdate({ _id: req.params.id }, updatedHorse, {
// 		new: true,
// 	}).then(() => {
// 		Horse.find({}).then((horse) => {
// 			res.json(horse);
// 		});
// 	});
// });

// router.delete('/:id', (req, res) => {
// 	Horse.findByIdAndDelete({ _id: req.params.id }).then(() => {
// 		Horse.find({}).then((horse) => {
// 			res.json(horse);
// 		});
// 	});
// });

// module.exports = router;
