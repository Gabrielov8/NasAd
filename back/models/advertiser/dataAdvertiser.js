const { Schema, model } = require("mongoose");

const dataAdvertiserSchema = new Schema({
  creator: String,
  subject: String,
  nameBlogger: String,
  cash: Number,
});

module.exports = model("dataAdvertiser", dataAdvertiserSchema);
