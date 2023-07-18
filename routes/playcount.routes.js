const express = require("express");
const router = express.Router();

const {
  getPlayCountController,
  addPlayCountController,
} = require("../controllers/playcount.controller");

router.get("/", (req, res) => {
  const response = getPlayCountController();
  res.send(response);
});

router.get("/:id", (req, res) => {
  const response = addPlayCountController(req.params.id);
  res.send(response);
});

module.exports = router;
