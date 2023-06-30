const express = require("express");
const router = express.Router();
const db = require("../db/index.js");

router.get("/", async (req, res) => {
  try {
    const patients = await db.query("SELECT * FROM patients;");
    res.json(patients.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
