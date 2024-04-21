import mongoose from "mongoose";

const favSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Department Name is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "Department Name is required"],
    },
    userId:{
     type: mongoose.Schema.Types.ObjectId,
    }
  },
  { timestamps: true }
);

export const Fav = mongoose.model("favourites", favSchema);
