const express = require("express");
const _ = express.Router();
const { CreateUser } = require("../../Controller/auth.controller");

_.route("/signup").post(CreateUser);

module.exports = _;
