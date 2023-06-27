const {
  getALLPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../repositories/patient.js");

const getAll = async (req, res) => {
  const patients = await getALLPatients();
  res.json(patients);
};
module.exports = {
  getAll,
};
