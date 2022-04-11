//mongoose
const mongoose = require("mongoose");

//schema
const { Schema, model } = mongoose;

//creation schema
const CategSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
});

// export to the data base model
module.exports = categprod = model("categprod", CategSchema);
