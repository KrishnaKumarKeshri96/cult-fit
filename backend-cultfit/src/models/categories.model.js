const mongoose = require("mongoose");
const categoriesSchema = new mongoose.Schema(
  {
    categories: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Category = mongoose.model("categorie", categoriesSchema);

module.exports = Category;
