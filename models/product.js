const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  slug: { type: String, unique: true },
  description: String,
  image: String,
  category: String,
  price: Number,
  stock: Number,
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
