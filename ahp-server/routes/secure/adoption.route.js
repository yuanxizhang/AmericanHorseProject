const express = require('express');
const router = express.Router();
const {
	getAllRequests,
	createRequest,
	getOneRequest,
	updateRequest,
	deleteRequest,
} = require('../../controllers/adoptionRequest.controller');

// Get all adoption requests
router.get('/', getAllRequests);

// Get one adoption request by id
adoptionRouter.route('/adoptionRequests/:id').get(AdoptionRequestController.getOneRequest);

// Add a new adoption request
router.post('/', createRequest);

// Update an adoption request by id
adoptionRouter.route('/adoptionRequests/:id').put(AdoptionRequestController.updateRequest);

// Delete an adoption request by id
adoptionRouter.route('/adoptionRequests/:id').delete(AdoptionRequestController.deleteRequest);

module.exports = router;
