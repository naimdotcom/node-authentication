const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.log("error while hashing password: ", error);
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    const res = await bcrypt.compare(password, hashedPassword);
    return res;
  } catch (error) {
    console.log("error while comparing password: ", error);
  }
};

module.exports = { hashPassword, comparePassword };
