const express = require("express");
const { as } = require("pg-promise");
const router = express.Router();
const db = require("../db/index.js");

// router.get("/", async (req, res) => {
//   try {
//     const patients = await db.query("SELECT * FROM patients;");
//     res.json(patients.rows);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const patients = await db.query(
    `select * from patients where patient_id=${id}`
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
    await db.query(`insert into patients (first_name, last_name, gender, birthdate, email, phone, address, city, postcode, country)
    values('${first_name}','${last_name}','${gender}','${birthdate}','${email}','${phone}','${address}','${city}','${postcode}','${country}')
    returning *
`);
  res.status(201).json({ patient: patients.rows[0] });
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
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
  const patients = await db.query(
    `UPDATE patients
    SET first_name = $1, last_name = $2, gender = $3, birthdate = $4, email = $5, phone = $6, address = $7, city = $8, postcode = $9, country = $10
    WHERE patient_id = ${id} values ('${first_name}','${last_name}','${gender}','${birthdate}','${email}','${phone}','${address}','${city}','${postcode}','${country}')
     RETURNING *`
  );
  res.json({ patient: patients.rows[0] });
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const patients = await db.query(
    `DELETE FROM patients WHERE patient_id = ${id} RETURNING *`
  );
  res.json({ patient: patients.rows[0] });
});

module.exports = router;
