import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  admin: {
    type: Boolean,
    default: false,
  },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

export const User = mongoose.model("Users", schema);
