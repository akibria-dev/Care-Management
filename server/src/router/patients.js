const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../models/patient.js");
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
// PUT update a patient
router.put("/:id", async (req, res) => {
  await update(req, res);
});
// DELETE a patient
router.delete("/:id", async (req, res) => {
  await remove(req, res);
});

module.exports = router;
