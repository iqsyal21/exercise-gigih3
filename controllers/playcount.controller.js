const {
  getPlayCountsService,
  addPlayCountService,
} = require("../services/playcount.service");

const getPlayCountController = () => {
  try {
    const playCounts = getPlayCountsService();

    return {
      msg: "success get all playcount",
      data: {
        playCounts,
      },
    };
  } catch (error) {
    throw error.msg;
  }
};

const addPlayCountController = (id) => {
  try {
    const playCount = addPlayCountService(id);

    return {
      msg: "success to add play count",
      data: {
        playCount,
      },
    };
  } catch (error) {
    throw error.msg;
  }
};

module.exports = {
  getPlayCountController,
  addPlayCountController,
};
