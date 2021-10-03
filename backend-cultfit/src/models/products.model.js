const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    size: { type: Array, required: true },
    price: { type: Number, required: true },
    actualPrice: { type: Number },
    disc: { type: Number },
    img: { type: Array, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productsSchema);

module.exports = Product;
