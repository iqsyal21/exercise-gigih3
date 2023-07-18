const { getSongs, getSongById, addPlay } = require("../models/songs.model");

const getPlayCountsService = () => {
  const songs = getSongs();
  if (songs == null || songs == undefined) {
    throw {
      msg: "songs not found",
    };
  }

  let playCounts = songs.map((item) => ({
    title: item.title,
    play: item.play,
  }));

  playCounts.sort((a, b) => {
    return b.play - a.play
  })

  return playCounts;
};

const addPlayCountService = (id) => {
  const cekSong = getSongById(id);
  if (cekSong == null || cekSong == undefined) {
    throw {
      msg: `song with id ${id} not found`,
    };
  } else {
    const addPlayCount = addPlay(id);
    return addPlayCount;
  }
};

module.exports = {
  getPlayCountsService,
  addPlayCountService,
};
