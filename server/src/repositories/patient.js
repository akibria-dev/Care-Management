const { as } = require("pg-promise")();
const db = require("../db");

const getAllPatients = async () => {
  const patients = await db.query("SELECT * FROM patients");
  return patients;
};
module.exports = { getAllPatients }; // export the function
