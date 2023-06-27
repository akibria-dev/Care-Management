const express = require("express");
const router = express.Router();
const { getAll } = require("../models/person");
// get all persons
router.get("/", async (req, res) => {
  try {
    const persons = await getAll();
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
