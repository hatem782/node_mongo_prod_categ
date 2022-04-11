const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connect");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

connectDB();
// routes - apis
app.use("/api/products", require("./routes/product.routes"));
app.use("/api/categories", require("./routes/categories.routes"));

app.listen(process.env.PORT || 6000, () => {
  console.log("server is running");
});
