const express = require("express");
const router = express.Router();
// const Organization = require("../db/models/Organization");
router.get("/", (req, res) => {
  Organization.find({}).then((organization) => {
    res.json(organization);
  });
});
router.get("/:id", (req, res) => {
  let parameter = req.params.id;
  Organization.findById(parameter).then((organization) => {
    res.json(organization);
  });
});
router.post("/", (req, res) => {
  Organization.create(req.body).then((organization) => {
    res.json(organization);
  });
});
router.put("/:id", (req, res) => {
  let updatedOrganization = req.body;
  Organization.findOneAndUpdate({ _id: req.params.id }, updatedOrganization, {
    new: true,
  }).then(() => {
    Organization.find({}).then((organization) => {
      res.json(organization);
    });
  });
});
router.delete("/:id", (req, res) => {
  Organization.findByIdAndDelete({ _id: req.params.id }).then(() => {
    Organization.find({}).then((organization) => {
      res.json(organization);
    });
  });
});
module.exports = router;
