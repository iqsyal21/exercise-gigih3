const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  link: {
    required: true,
    type: String,
  },
  img_url: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Product", productSchema);
