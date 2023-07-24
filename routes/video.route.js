const express = require("express");
const router = express.Router();

const {
  getVideosController,
  getVideoByIdController,
  createVideoController,
  updateVideoController,
  deleteVideoController,
  addCommentController,
  updateProductsVideoController,
} = require("../controllers/video.controller");

const cekToken = require("../midleware/cekToken");

router.get("/", getVideosController);
router.get("/:id", getVideoByIdController);
router.post("/", cekToken, createVideoController);
router.patch("/:id", cekToken, updateVideoController);
router.delete("/:id", cekToken, deleteVideoController);
router.post("/:id/comments", cekToken, addCommentController);
router.patch("/:id/products", cekToken, updateProductsVideoController);

module.exports = router;
