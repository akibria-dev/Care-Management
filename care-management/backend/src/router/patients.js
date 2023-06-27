const express = require("express");
const router = express.Router();
const { getAll } = require("../models/patient.js");
// get all patients
router.get("/", async (req, res) => {
  try {
    const patient = await getAll(req, res);
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
