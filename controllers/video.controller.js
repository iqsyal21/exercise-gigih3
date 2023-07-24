const {
  getVideosService,
  getVideoByIdService,
  createVideoService,
  updateVideoService,
  deleteVideoService,
  addCommentService,
} = require("../services/video.service");

const getVideosController = async (req, res) => {
  try {
    const videos = await getVideosService();

    res.status(200).json({
      message: "success get all videos",
      data: {
        videos,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getVideoByIdController = async (req, res) => {
  try {
    if (req.params.id.length < 24) throw { message: "id is doesn't match" };

    const video = await getVideoByIdService(req.params.id);

    res.status(200).json({
      message: "success get detail video",
      data: {
        video,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const createVideoController = async (req, res) => {
  try {
    const { video_url, img_url, category } = req.body;
    const newVideo = await createVideoService(video_url, img_url, category);

    res.status(201).json({
      message: "success add new video",
      data: {
        newVideo,
      },
    });
  } catch (error) {
    res.status(403).json({
      message: error.message,
    });
  }
};

const updateVideoController = async (req, res) => {
  try {
    if (req.params.id.length < 24) throw { message: "id is doesn't match" };

    const { video_url, img_url, category } = req.body;
    const updateVideo = await updateVideoService(
      req.params.id,
      video_url,
      img_url,
      category
    );

    res.status(200).json({
      message: "success update video",
      data: {
        updateVideo,
      },
    });
  } catch (error) {
    res.status(403).json({
      message: error.message,
    });
  }
};

const deleteVideoController = async (req, res) => {
  try {
    if (req.params.id.length < 24) throw { message: "id is doesn't match" };

    const deleteVideo = await deleteVideoService(req.params.id);

    res.status(200).json({
      message: "success deleted video",
      data: deleteVideo,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const addCommentController = async (req, res) => {
  try {
    if (req.params.id.length < 24) throw { message: "id is doesn't match" };

    const updateVideo = await addCommentService(
      req.params.id,
      req.auth.username,
      req.body.comment
    );

    res.status(200).json({
      message: "success add comment to video",
      data: {
        updateVideo,
      },
    });
  } catch (error) {
    res.status(403).json({
      message: error.message,
    });
  }
};

module.exports = {
  getVideosController,
  getVideoByIdController,
  createVideoController,
  updateVideoController,
  deleteVideoController,
  addCommentController,
};
