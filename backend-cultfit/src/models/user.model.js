const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
<<<<<<< HEAD
=======
    // password: { type: String, required: true },
>>>>>>> origin/partialMerge
    name: { type: String, required: true },
    given_name: { type: String, required: true },
    family_name: { type: String, required: true },
    picture: { type: String, required: true },
    email: { type: String, required: true },
<<<<<<< HEAD
    // cart:[{type: mongoose.Types.Schema.ObjectId,}]
=======
    // cart: [{ type: ObjectId, ref: "brand" }],
>>>>>>> origin/partialMerge
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
