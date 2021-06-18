const AdoptionRequest = require('../models/AdoptionRequest');
const cuid = require('cuid');

<<<<<<< HEAD
export function getAllRequests(req, res) {
  AdoptionRequest
  .find()
  .sort({ "dateOfRequest": -1 })
  .populate('user')
  .populate('horse')
  .exec((err, adoptionRequests) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ adoptionRequests });
  });
}
=======
exports.getAllRequests = (req, res) => {
	AdoptionRequest.find()
		.sort('-dateOfRequest')
		.exec((err, adoptionRequests) => {
			if (err) {
				res.status(500).send(err);
			}
			res.json({ adoptionRequests });
		});
};
>>>>>>> 7c6519c0b6b0701618549a01a7c7f6fa014b6ded

exports.createRequest = (req, res) => {
	// if (!req.body.adoptionRequest.user || !req.body.adoptionRequest.horse) {
	// 	res.status(403).end();
	// }

	// const newAdoptionRequest = new AdoptionRequest(req.body.adoptionRequest);

	// newAdoptionRequest.id = cuid();
	// newAdoptionRequest.save((err, saved) => {
	// 	if (err) {
	// 		res.status(500).send(err);
	// 	}
	// 	res.json({ adoptionRequest: saved });
	// });
	try {
		
	} catch (err) {
		
	}
};

/* Get a single adoptionRequest */
exports.getOneRequest = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: 'Data to update can not be empty!',
		});
	}

	const id = req.params.id;

<<<<<<< HEAD
  AdoptionRequest
  .findById(id)
  .populate('user')
  .populate('horse')
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not able to find adoption request with id " + id });
    else res.json(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving request with id=" + id });
  });
}
=======
	AdoptionRequest.findById(id)
		.then((data) => {
			if (!data)
				res
					.status(404)
					.send({ message: 'Not able to find adoption request with id ' + id });
			else res.json(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving request with id=' + id });
		});
};
>>>>>>> 7c6519c0b6b0701618549a01a7c7f6fa014b6ded

/* Update an adoption request */
exports.updateRequest = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: 'Data to update can not be empty!',
		});
	}

	const id = req.params.id;

	AdoptionRequest.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot update request with id=${id}. Adoption request was not found!`,
				});
			} else
				res.send({ message: 'Adoption request was updated successfully.' });
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error updating adption request with id=' + id,
			});
		});
};

/* Delete an adoption request */
exports.deleteRequest = (req, res) => {
	AdoptionRequest.findOne({ id: req.params.id }).exec(
		(err, adoptionRequest) => {
			if (err) {
				res.status(500).send({ message: err.message });
			}

			adoptionRequest.remove(() => {
				res.status(200).end();
			});
		}
	);
};
