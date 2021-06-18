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

<<<<<<< HEAD
// Get one adoption request by id
adoptionRouter.route('/adoptionRequests/:id').get(AdoptionRequestController.getOneRequest);
=======
// Get one adoption request by cuid
router.get('/adoptionRequests/:id', getOneRequest);
>>>>>>> 7c6519c0b6b0701618549a01a7c7f6fa014b6ded

// Add a new adoption request
router.post('/', createRequest);

<<<<<<< HEAD
// Update an adoption request by id
adoptionRouter.route('/adoptionRequests/:id').put(AdoptionRequestController.updateRequest);

// Delete an adoption request by id
adoptionRouter.route('/adoptionRequests/:id').delete(AdoptionRequestController.deleteRequest);
=======
// Update an adoption request by cuid
router.put('/adoptionRequests/:id', updateRequest);

// Delete an adoption request by cuid
router.delete('/', deleteRequest);
>>>>>>> 7c6519c0b6b0701618549a01a7c7f6fa014b6ded

module.exports = router;
