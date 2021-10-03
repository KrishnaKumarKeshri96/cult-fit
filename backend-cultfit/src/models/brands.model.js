const mongoose = require("mongoose");
const brandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    title: { type: String, required: true },

    subTitle: { type: String, required: true },
    description: { type: String, required: true },
    products: {
      img: { type: Array, required: true },
      title: { type: Array, required: true },
      description: { type: Array, required: true },
      btn: { type: Array, required: true },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Brand = mongoose.model("brand", brandSchema);

module.exports = Brand;
