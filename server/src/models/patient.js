const {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../repositories/patient.js");

const getAll = async (req, res) => {
  const patients = await getAllPatients();
  res.json({ patients: patients.rows });
};
module.exports = {
  getAll,
};
