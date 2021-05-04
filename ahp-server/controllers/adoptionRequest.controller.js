import AdoptionRequest from '../models/AdoptionRequest';
import cuid from 'cuid';

export function getAllRequests(req, res) {
  AdoptionRequest.find().sort('-dateOfRequest').exec((err, adoptionRequests) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ adoptionRequests });
  });
}

export function createRequest(req, res) {
  if (!req.body.adoptionRequest.user || !req.body.adoptionRequest.horse ) {
    res.status(403).end();
  }

  const newAdoptionRequest = new AdoptionRequest(req.body.adoptionRequest);

  newAdoptionRequest.id = cuid();
  newAdoptionRequest.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ adoptionRequest: saved });
  });
}

/* Get a single adoptionRequest */
export function getOneRequest(req, res) {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  AdoptionRequest.findById(id)
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

/* Update an adoption request */
export function updateRequest(req, res) {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  AdoptionRequest.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update request with id=${id}. Adoption request was not found!`
        });
      } else res.send({ message: "Adoption request was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating adption request with id=" + id
      });
    });
}

/* Delete an adoption request */
export function deleteRequest(req, res) {
  AdoptionRequest.findOne({ id: req.params.id }).exec((err, adoptionRequest) => {
    if (err) {
      res.status(500).send({message: err.message});
    }

    adoptionRequest.remove(() => {
      res.status(200).end();
    });
  });
}