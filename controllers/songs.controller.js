const {
  getSongsService,
  getSongByIdService,
  addSongService,
  updateSongService,
  deleteSongService,
} = require("../services/songs.service");

const getSongsController = () => {
  try {
    const songs = getSongsService();

    return {
      msg: "success get all songs",
      data: {
        songs,
      },
    };
  } catch (error) {
    throw error.msg;
  }
};

const getSongbyIdController = (id) => {
  try {
    const song = getSongByIdService(id);

    return {
      msg: `success get song with id ${id}`,
      data: {
        song,
      },
    };
  } catch (error) {
    throw error.msg;
  }
};

const addSongController = (title, artist, url) => {
  try {
    if (title == null || title == "") throw { msg: "title is empty" };
    if (artist == null || artist == "") throw { msg: "artist is empty" };
    if (url == null || url == "") throw { msg: "url is empty" };

    const createSong = addSongService(title, artist, url);

    return {
      msg: "success add new song",
      data: {
        createSong,
      },
    };
  } catch (error) {
    throw error.msg;
  }
};

const updateSongController = (id, title, artist, url) => {
  try {
    if (title == null || title == "") throw { msg: "title is empty" };
    if (artist == null || artist == "") throw { msg: "artist is empty" };
    if (url == null || url == "") throw { msg: "url is empty" };

    const editSong = updateSongService(id, title, artist, url);

    return {
      msg: `success edit song with id ${id}`,
      data: {
        editSong,
      },
    };
  } catch (error) {
    throw error.msg;
  }
};

const deleteSongController = (id) => {
  try {
    const deletedSong = deleteSongService(id);

    return {
      msg: `success delete song with id ${id}`,
      data: {
        deletedSong,
      },
    };
  } catch (error) {
    throw error.msg;
  }
};

module.exports = {
  getSongsController,
  getSongbyIdController,
  addSongController,
  updateSongController,
  deleteSongController,
};
