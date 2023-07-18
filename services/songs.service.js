const {
  getSongs,
  getSongById,
  addSong,
  updateSong,
  deleteSong,
} = require("../models/songs.model");

const getSongsService = () => {
  const songs = getSongs();
  if (songs == null || songs == undefined) {
    throw {
      msg: "songs not found",
    };
  }

  return songs;
};

const getSongByIdService = (id) => {
  const song = getSongById(id);
  if (song == null || song == undefined) {
    throw {
      msg: `cannot find song with id ${id}`,
    };
  } else {
    return song;
  }
};

const addSongService = (title, artist, url) => {
  const createSong = addSong(title, artist, url);
  return createSong;
};

const updateSongService = (id, title, artist, url) => {
  const cekSong = getSongById(id);
  if (cekSong == null || cekSong == undefined) {
    throw {
      msg: `cannot find song with id ${id}`,
    };
  } else {
    const editSong = updateSong(id, title, artist, url);
    return editSong;
  }
};

const deleteSongService = (id) => {
  const cekSong = getSongById(id);
  if (cekSong == null || cekSong == undefined) {
    throw {
      msg: `cannot find song with id ${id}`,
    };
  } else {
    const deletedSong = deleteSong(id);
    return deletedSong
  }
}

module.exports = {
  getSongsService,
  getSongByIdService,
  addSongService,
  updateSongService,
  deleteSongService
};
