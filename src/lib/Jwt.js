const jwt = require("jsonwebtoken");

const generateToken = (
  payload,
  time = process.env.JWT_SECRET_EXPIRY || "1D"
) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: time,
  });
  return token;
};

module.exports = { generateToken };
