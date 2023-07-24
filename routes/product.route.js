const express = require("express");
const router = express.Router();

const {
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
} = require("../controllers/product.controller");

const cekToken = require("../midleware/cekToken");

router.get("/", getProductController);
router.post("/", cekToken, createProductController);
router.patch("/:id", cekToken, updateProductController);
router.delete("/:id", cekToken, deleteProductController);

module.exports = router;
