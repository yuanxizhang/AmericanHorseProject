const express = require('express');
const router = express.Router();
const {
  getAllHorses,
  getHorseById,
  createOrUpdateHorse,
  deleteHorse
} = require('../../controllers/horses');


// get all horses
router.get('/', getAllHorses)

// get one horse by cuid
router.get('/horse/:horse-id',getHorseById)

// add a new horse
router.post('/', createOrUpdateHorse);

// delete a horse
router.delete('/', deleteHorse);

module.exports =  router;
