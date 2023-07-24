require("dotenv").config();

const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUserService = async (username) => {
  const user = await User.findOne({ username: username });
  if (user) {
    return user;
  } else {
    throw {
      message: "user not found",
    };
  }
};

const createUserService = async (username, password) => {
  const cekUser = await User.findOne({ username: username });
  if (cekUser) throw { message: "username is already in use" };

  try {
    const newUser = new User({
      username: username,
      password: bcrypt.hashSync(password, 8),
    });

    await newUser.save();
    return newUser;
  } catch (error) {
    return error.message;
  }
};

const loginUserService = async (username, password) => {
  try {
    const cekUser = await User.findOne({ username: username });
    if (!cekUser) throw { message: `username ${username} not found` };

    const cekPassword = bcrypt.compareSync(password, cekUser.password);
    if (!cekPassword) throw { message: "password doesn't match" };

    const token = jwt.sign(
      { id: cekUser._id, username: cekUser.username },
      process.env.SECRET_KEY,
      { expiresIn: "1800s" } // 30 minute
    );

    return token;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getUserService,
  createUserService,
  loginUserService,
};
