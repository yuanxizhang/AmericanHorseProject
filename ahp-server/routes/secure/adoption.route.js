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

// Get one adoption request by cuid
router.get('/adoptionRequests/:id', getOneRequest);

// Add a new adoption request
router.post('/', createRequest);

// Update an adoption request by cuid
router.put('/adoptionRequests/:id', updateRequest);

// Delete an adoption request by cuid
router.delete('/', deleteRequest);

module.exports = router;
