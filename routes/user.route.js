const express = require("express");
const router = express.Router();

const {
  getUserController,
  createUserController,
  loginUserController
} = require("../controllers/user.controller");

router.get("/:username", getUserController);
router.post("/", createUserController);
router.post("/login", loginUserController)

module.exports = router;
