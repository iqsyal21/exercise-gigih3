const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  video_url: {
    required: true,
    type: String,
  },
  img_url: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  comment_list: {
    type: Array,
  },
});

module.exports = mongoose.model("Video", videoSchema);
