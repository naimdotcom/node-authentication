const { ApiResponse, ApiError } = require("../utils/ApiResponse");
const User = require("../Model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const CreateUser = async () => {
  try {
  } catch (error) {
    console.log("error While creating user: ", error);
  }
};

module.exports = {
  CreateUser,
};
