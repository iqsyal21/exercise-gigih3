const express = require("express");
const app = express();

const port = 3000;
let songs = [
  {
    id: 1,
    title: "Stand Out Fit In",
    artist: "One Ok Rock",
    url: "https://open.spotify.com/intl-id/track/4zXRMjTaeflesB3Ih4eHnJ?si=428b3537cb024dfc",
  },
  {
    id: 2,
    title: "Wherever You Are",
    artist: "One Ok Rock",
    url: "https://open.spotify.com/intl-id/track/0YAMQSmHk6BSUGTYpaoqTJ?si=024d6d2e54f84980",
  },
  {
    id: 3,
    title: "Theme of Mithsuha",
    artist: "Radwimps",
    url: "https://open.spotify.com/intl-id/track/66HNv8qd9jr7q5P9nNTOOZ?si=9905948272a5452b",
  },
  {
    id: 4,
    title: "Hearthace",
    artist: "One Ok Rock",
    url: "https://open.spotify.com/intl-id/track/0OwEskGUqCMgkSY7JkJS7x",
  },
  {
    id: 5,
    title: "Katawaredoki",
    artist: "Radwimps",
    url: "https://open.spotify.com/intl-id/track/4WedBZTeFawYCBCgfj36iK?si=f24889f8ada34d3c",
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    status: 200,
    msg: "success",
    data: "Welcome to Spotify Playlists API",
  });
});

app.get("/playlists", (req, res) => {
  if (songs.length > 0) {
    res.json({
      status: 200,
      msg: "success get all songs from playlists",
      data: songs,
    });
  } else {
    res.json({
      status: 404,
      msg: "songs not found",
      data: songs,
    });
  }
});

app.get("/playlists/:id", (req, res) => {
  const songById = songs.find((item) => item.id == req.params.id);
  if (songById != null || songById != undefined) {
    res.json({
      status: 200,
      msg: "success get song by id",
      data: songById,
    });
  } else {
    res.json({
      status: 404,
      msg: `song with id ${req.params.id} not found`,
    });
  }
});

app.post("/playlists", (req, res) => {
  const newSongs = [
    ...songs,
    {
      id: songs.length + 1,
      title: req.body.title,
      artist: req.body.artist,
      url: req.body.url,
    },
  ];
  songs = newSongs;
  res.json({
    status: 200,
    msg: "success add new song",
    data: newSongs,
  });
});

app.put("/playlists/:id", (req, res) => {
  const songIndex = songs.findIndex((item) => item.id == req.params.id);
  if (songIndex >= 0) {
    songs[songIndex] = { id: songs[songIndex].id, ...req.body };
    res.json({
      status: 200,
      msg: "success update song",
      data: songs[songIndex],
    });
  } else {
    res.json({
      status: 404,
      msg: `song with id ${req.params.id} not found`,
    });
  }
});

app.delete("/playlists/:id", (req, res) => {
  const songIndex = songs.findIndex((item) => item.id == req.params.id);
  if (songIndex >= 0) {
    songs.splice(songIndex, 1);
    res.json({
      status: 200,
      msg: `success delete song with id ${req.params.id}`,
    });
  } else {
    res.json({
      status: 404,
      msg: `song with id ${req.params.id} not found`,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
