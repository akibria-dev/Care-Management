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
module.exports = { getAllPatients, getPatientById, createPatient }; // export the function
