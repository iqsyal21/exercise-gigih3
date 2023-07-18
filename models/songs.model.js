let songs = [
  {
    id: 1,
    title: "Stand Out Fit In",
    artist: "One Ok Rock",
    url: "https://open.spotify.com/intl-id/track/4zXRMjTaeflesB3Ih4eHnJ?si=428b3537cb024dfc",
    play: 1,
  },
  {
    id: 2,
    title: "Wherever You Are",
    artist: "One Ok Rock",
    url: "https://open.spotify.com/intl-id/track/0YAMQSmHk6BSUGTYpaoqTJ?si=024d6d2e54f84980",
    play: 2,
  },
  {
    id: 3,
    title: "Theme of Mithsuha",
    artist: "Radwimps",
    url: "https://open.spotify.com/intl-id/track/66HNv8qd9jr7q5P9nNTOOZ?si=9905948272a5452b",
    play: 3,
  },
  {
    id: 4,
    title: "Hearthace",
    artist: "One Ok Rock",
    url: "https://open.spotify.com/intl-id/track/0OwEskGUqCMgkSY7JkJS7x",
    play: 4,
  },
  {
    id: 5,
    title: "Katawaredoki",
    artist: "Radwimps",
    url: "https://open.spotify.com/intl-id/track/4WedBZTeFawYCBCgfj36iK?si=f24889f8ada34d3c",
    play: 5,
  },
];

const getSongs = () => {
  return songs;
};

const getSongById = (id) => {
  return songs.find((song) => song.id == id);
};

const addSong = (title, artist, url) => {
  const newSong = {
    id: songs.length + 1,
    title: title,
    artist: artist,
    url: url,
    play: 0,
  };

  songs.push(newSong);
  return newSong;
};

const updateSong = (id, title, artist, url) => {
  const songIndex = songs.findIndex((song) => song.id == id);
  songs[songIndex] = {
    id: songs[songIndex].id,
    title: title,
    artist: artist,
    url: url,
    play: 0,
  };
  return songs[songIndex];
};

const deleteSong = (id) => {
  const songIndex = songs.findIndex((song) => song.id == id);
  console.log("cek id", songIndex);
  return songs.splice(songIndex, 1);
};

const addPlay = (id) => {
  const songIndex = songs.findIndex((song) => song.id == id);
  songs[songIndex].play = songs[songIndex].play + 1;
  return songs[songIndex];
};

module.exports = {
  getSongs,
  getSongById,
  addSong,
  updateSong,
  deleteSong,
  addPlay,
};
