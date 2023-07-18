const express = require("express");
const router = express.Router();

const {
  getSongsController,
  getSongbyIdController,
  addSongController,
  updateSongController,
  deleteSongController,
} = require("../controllers/songs.controller");

router.get("/", (req, res) => {
  const response = getSongsController();
  res.send(response);
});

router.get("/:id", (req, res) => {
  const response = getSongbyIdController(req.params.id);
  res.send(response);
});

router.post("/", (req, res) => {
  const response = addSongController(
    req.body.title,
    req.body.artist,
    req.body.url
  );
  res.send(response);
});

router.put("/:id", (req, res) => {
  const response = updateSongController(
    req.params.id,
    req.body.title,
    req.body.artist,
    req.body.url
  );
  res.send(response);
});

router.delete("/:id", (req, res) => {
  const response = deleteSongController(req.params.id);
  res.send(response);
});

module.exports = router;
