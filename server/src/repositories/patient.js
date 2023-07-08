const { as } = require("pg-promise")();
const db = require("../../db/index.js");

const getAllPatients = async () => {
  const patients = await db.query("SELECT * FROM patients");
  return patients;
};
const getPatientById = async (id) => {
  const patients = await db.query(
    `SELECT * FROM patients WHERE patient_id = ${id}`
  );
  return patients.rows[0];
};
const createPatient = async (values) => {
  const patients = await db.query(
    "INSERT INTO patients (first_name, last_name, gender, birthdate, email, phone, address, city, postcode, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 ) RETURNING *",
    values
  );

  return patients.rows[0];
};
const updatePatient = async (id, values) => {
  const patients = await db.query(
    `UPDATE patients
    SET first_name = $2, last_name = $3, gender = $4, birthdate = $5, email = $6, phone = $7, address = $8, city = $9, postcode = $10, country = $11
    WHERE patient_id = $1 RETURNING *`,
    [id, ...values]
  );
  return patients.rows[0];
};
const deletePatient = async (id) => {
  const patients = await db.query(
    `DELETE FROM patients WHERE patient_id = ${id} RETURNING *`
  );
  return patients.rows[0];
};
module.exports = {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
}; // export the function
