const express = require("express");
const { as } = require("pg-promise");
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
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const patients = await db.query(
    `select * from patient where patient_id=${id}`
  );
  res.json({ patient: patients.rows[0] });
});
router.post("/", async (req, res) => {
  const {
    first_name,
    last_name,
    gender,
    birthdate,
    email,
    phone,
    address,
    city,
    postcode,
    country,
  } = req.body;
  const patients =
    await db.query(`insert into patient (first_name, last_name, gender, birthdate, email, phone, address, city, postcode, country)
    values('${first_name}','${last_name}','${gender}','${birthdate}','${email}','${phone}','${address}','${city}','${postcode}','${country}')
    returning *
`);
  res.status(201).json({ patient: patients.rows[0] });
});

module.exports = router;
