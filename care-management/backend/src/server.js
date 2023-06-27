const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Implement persons APIs using Express Modular Routers
const patientRouter = require("./router/patients.js");

app.use("/patients", patientRouter);

module.exports = app;
