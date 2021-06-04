// import { Router } from 'express';
//import * as HorseController from '../../controllers/horses';
// import  as HorseController from '../../controllers/horses';
const {
  getAllHorses,
  getHorseById
} = require('../../controllers/horses');

const horseRouter = require('express').Router();

// get all horses
horseRouter.get('/horses', getAllHorses)

// // get one horse by cuid
horseRouter.get('/horses/:id',getHorseById)
//horseRouter.route('/horses/:id').get(HorseController);

// // add a new horse
// horseRouter.route('/horses').post(HorseController);

// // update a horse
// horseRouter.route('/horses/:id').put(HorseController);

// // delete a horse
// horseRouter.route('/horses/:id').delete(HorseController);

module.exports =  horseRouter;
