const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    tcKimlik: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Appointment", appointmentSchema);
