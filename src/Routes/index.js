const express = require("express");
const _ = express.Router();
const authRoute = require("./api/auth.route.js");

_.use("/api/auth", authRoute);

module.exports = _;
