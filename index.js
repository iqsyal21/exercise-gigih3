const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// connect database
const database = require("./config/config");

const sampleRoute = require("./routes/sample.route");

const userRoute = require("./routes/user.route");
const productRoute = require("./routes/product.route");
const videoRoute = require("./routes/video.route");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "success",
    data: "Welcome to Tokopedia Clone API",
  });
});

app.use("/sample", sampleRoute);

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/video", videoRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
