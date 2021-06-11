const express = require('express');
const router = express.Router();
const {
	getCurrentOrg,
	createOrUpdateOrg,
	getAllOrganizations,
	getOrgByID,
	deleteOrg,
} = require('../../controllers/organization');

// Get current organization
router.get('/me', getCurrentOrg);

// Create or update an organization
router.post('/', createOrUpdateOrg);

// Get all organizations
router.get('/', getAllOrganizations);

// Get organization by user ID
router.get('/user/:user-id', getOrgByID);

// Delete an organization
router.delete('/', deleteOrg);

module.exports = router;