const Product = require("../models/product.model");
const Video = require("../models/video.model");

const express = require("express");
const router = express.Router();

const { videos, products } = require("../sampledata");

router.get("/", async (req, res) => {
  const addSampleProducts = await Product.insertMany(products);
  const addSampleVideos = await Video.insertMany(videos);

  res.status(200).json({
    message: "success add sample data",
    products: addSampleProducts,
    videos: addSampleVideos,
  });
});

module.exports = router;
