const { as } = require("pg-promise")();
const db = require("../../db/index.js");

const getAllPatients = async () => {
  const patients = await db.query("SELECT * FROM patients");
  return patients;
};
module.exports = { getAllPatients }; // export the function
