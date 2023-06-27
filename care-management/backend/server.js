const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Implement persons APIs using Express Modular Routers
const personRouter = require("./router/books.js");

app.use("/persons", personRouter);

module.exports = app;
