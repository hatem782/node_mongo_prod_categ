//mongoose
const mongoose = require("mongoose");

//schema
const { Schema, model } = mongoose;

//creation schema
const ProdSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: String, required: true },
  image: { type: String, required: true },
  color: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categprod",
  },
});

// export the data base model
module.exports = product = model("product", ProdSchema);
