require("dotenv").config();

const jwt = require("jsonwebtoken");

const cekToken = async (req, res, next) => {
  try {
    const tokenBearer = req.headers.authorization;
    if (tokenBearer) {
      const token = tokenBearer.split(" ")[1];
      jwt.verify(token, process.env.SECRET_KEY, function (error, decoded) {
        if (error) {
          res.status(403).json({ message: "token doesn't match" });
        } else {
          req.auth = decoded;
          next();
        }
      });
    } else {
      res.status(401).json({ message: "token not registered " });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = cekToken