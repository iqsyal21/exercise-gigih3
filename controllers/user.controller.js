const {
  getUserService,
  createUserService,
  loginUserService,
} = require("../services/user.service");

const getUserController = async (req, res) => {
  try {
    const user = await getUserService(req.params.username);

    res.status(200).json({
      message: "success get user",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const createUserController = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username == null || username == "") throw { message: "username is empty" };
    if (password == null || password == "") throw { message: "password is empty" };

    const createUser = await createUserService(username, password);

    res.status(201).json({ message: "success add new user" });
  } catch (error) {
    res.status(403).json({
      message: error.message,
    });
  }
};

const loginUserController = async (req, res) => {
  try {
    const { username, password } = req.body;

    const getToken = await loginUserService(username, password);

    res.status(200).json({ message: "login success", token: getToken });
  } catch (error) {
    res.status(403).json({
      message: error.message,
    });
  }
};

module.exports = {
  getUserController,
  createUserController,
  loginUserController,
};
