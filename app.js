const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const routes = require("./src/Routes/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

module.exports = app;
