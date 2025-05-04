const express = require("express");
const _ = express.Router();
const { CreateUser, loginUser } = require("../../Controller/auth.controller");

_.route("/signup").post(CreateUser);
_.route("/login").post(loginUser);

module.exports = _;
