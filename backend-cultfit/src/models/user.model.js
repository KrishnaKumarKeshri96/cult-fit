const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    // password: { type: String, required: true },
    name: { type: String, required: true },
    given_name: { type: String, required: true },
    family_name: { type: String, required: true },
    picture: { type: String, required: true },
    email: { type: String, required: true },
    // cart: [{ type: ObjectId, ref: "brand" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
