const { ApiResponse, ApiError } = require("../utils/ApiResponse");
const User = require("../Model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { hashPassword } = require("../Helper/bcrypt");
const { generateToken } = require("../Helper/Jwt");

const CreateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body; // ?note: destructure req.body as you want

    if (!name || !email || !password) {
      //? note: check if any field is missing
      return res.status(400).json(new ApiError(400, "All fields are required"));
    }

    // check if the user email exist or not
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json(new ApiError(400, "User already exist"));
    }

    const hashPass = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      password: hashPass,
    });

    const token = generateToken(
      { id: user._id },
      process.env.JWT_SECRET_EXPIRY_OTP
    );

    return res
      .status(200)
      .json(
        new ApiResponse(200, "User created successfully", {
          token: `Bearer ${token}`,
        })
      )
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
      });
  } catch (error) {
    console.log("error While creating user: ", error);
  }
};

module.exports = {
  CreateUser,
};
