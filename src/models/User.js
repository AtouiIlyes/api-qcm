const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  login: String,
  passwd: String,
  score: Number,
});

module.exports = mongoose.model("User", UserSchema);
