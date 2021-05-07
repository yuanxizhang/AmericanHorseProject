import { Router } from 'express';
import * as HorseController from '../../controllers/horses';
const horsRouter = new Router();

// get all horses
horsRouter.route('/horses').get(HorseController);

// get one horse by cuid
horsRouter.route('/horses/:id').get(HorseController);

// add a new horse
horseRouter.route('/horses').post(HorseController);

// update a horse
horseRouter.route('/horses/:id').put(HorseController);

// delete a horse
horseRouter.route('/horses/:id').delete(HorseController);

export default horsRouter;
