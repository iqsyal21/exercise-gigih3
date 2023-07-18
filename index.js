const express = require("express");
const app = express();
const port = 3000;

const playlists = require("./routes/songs.routes");
const playcount = require("./routes/playcount.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    status: 200,
    msg: "success",
    data: "Welcome to Spotify Playlists API",
  });
});

app.use("/playlists", playlists);
app.use("/playcount", playcount);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
