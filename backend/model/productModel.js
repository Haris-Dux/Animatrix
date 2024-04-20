import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Department Name is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "Department Name is required"],
    },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
  },
  { timestamps: true }
);

export const Support = mongoose.model("product", productSchema);
