import { Router } from 'express';
import * as AdoptionRequestController from '../controllers/adoptionRequest.controller';
const adoptionRouter = new Router();

// Get all adoption requests
adoptionRouter.route('/adoptionRequests').get(AdoptionRequestController.getAllRequests);

// Get one adoption request by id
adoptionRouter.route('/adoptionRequests/:id').get(AdoptionRequestController.getOneRequest);

// Add a new adoption request
adoptionRouter.route('/adoptionRequests').post(AdoptionRequestController.createRequest);

// Update an adoption request by id
adoptionRouter.route('/adoptionRequests/:id').put(AdoptionRequestController.updateRequest);

// Delete an adoption request by id
adoptionRouter.route('/adoptionRequests/:id').delete(AdoptionRequestController.deleteRequest);

export default adoptionRouter;