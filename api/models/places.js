const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  title: String,
  address: String,
  photos: [String],
  discription: String,
  perks: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuest: Number,
});

const placeModel = mongoose.model("Place", placeSchema);

module.exports = placeModel;
