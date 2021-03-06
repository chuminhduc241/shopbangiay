require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
var bodyParser = require("body-parser");

const app = express();
require("./helpers/init_mongoose");
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use("/api/auth", require("./routes/userRouter"));
app.use("/api/", require("./routes/uploadRouter"));
app.use("/api/", require("./routes/productRouter"));

app.use("/", (req, res) => {
  res.json({ msg: "Hello everyone" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
