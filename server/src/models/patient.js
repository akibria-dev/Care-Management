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
const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const patients = await getPatientById(id);

    if (!patients) {
      // If the DB returns no data (i.e. it is `undefined`), we return a custom error message
      res
        .status(404)
        .json({ error: `A patient with the provided ID ${id} does not exist` });
    } else {
      res.json({ patient: patients });
    }
  } catch (error) {
    // If there is some other error that occurs with the request, we return the built-in error messsage
    res.status(500).json({ error: error.message });
  }
};
const create = async (req, res) => {
  // Ensure the order of the values is:
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
  const values = [
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
  ];

  try {
    const patients = await createPatient(values);

    if (!patients) {
      res.status(400).json({
        error: "Missing fields in the request body.",
        body: req.body,
      });
    } else {
      res.status(201).json({ patient: patients });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const update = async (req, res) => {
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
  const values = [
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
  ];
  try {
    const patients = await updatePatient(id, values);

    if (!patients) {
      res.status(400).json({
        error: "Missing fields in the request body.",
        body: req.body,
      });
    } else {
      res.json({ patient: patients });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const patients = await deletePatient(id);

    if (!patients) {
      res.status(404).json({
        error: `A patient with the provided ID ${id} does not exist`,
      });
    } else {
      res.json({ patient: patients });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
