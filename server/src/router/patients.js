const express = require("express");
const router = express.Router();
const { getAll, getById, create } = require("../models/patient.js");
// get all patients
router.get("/", async (req, res) => {
  try {
    const patient = await getAll(req, res);
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// get patient by id
router.get("/:id", async (req, res) => {
  await getById(req, res);
});

// POST create a patient
router.post("/", async (req, res) => {
  await create(req, res);
});
module.exports = router;
