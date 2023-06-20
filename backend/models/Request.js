const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    bloodType: {
      type: String,
      trim: true,
      required: true,
    },
    age: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      trim: true,
      required: true,
    },
    priority: {
      type: String,
      trim: true,
      required: true,
    },
    place: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Request", requestSchema);
