const express = require("express");
const router = express.Router();
const Rescuer = require("../db/models/Rescuers");
router.get("/", (req, res) => {
  Rescuer.find({}).then((rescuer) => {
    res.json(rescuer);
  });
});
router.get("/:id", (req, res) => {
  let parameter = req.params.id;
  Rescuer.findById(parameter).then((rescuer) => {
    res.json(rescuer);
  });
});
router.post("/", (req, res) => {
  Rescuer.create(req.body).then((rescuer) => {
    res.json(rescuer);
  });
});
router.put("/:id", (req, res) => {
  let updatedRescuer = req.body;
  Rescuer.findOneAndUpdate({ _id: req.params.id }, updatedRescuer, {
    new: true,
  }).then(() => {
    Rescuer.find({}).then((rescuer) => {
      res.json(rescuer);
    });
  });
});
router.delete("/:id", (req, res) => {
  Rescuer.findByIdAndDelete({ _id: req.params.id }).then(() => {
    Rescuer.find({}).then((rescuer) => {
      res.json(rescuer);
    });
  });
});
module.exports = router;
