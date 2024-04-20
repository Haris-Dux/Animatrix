import mongoose from "mongoose";

const supportSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Department Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Department Name is required"],
  },
  email: {
    type: String,
    required: [true, "Department Name is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Department Name is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  }
},{timestamps:true});


export const Support = mongoose.model("Support", supportSchema);
