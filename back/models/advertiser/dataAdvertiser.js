const { Schema, model } = require("mongoose");

const dataAdvertiserSchema = new Schema({
  creator: String,
  subject: String,
  nameBlogger: String,
  cash: Number,
  active: Boolean
});

module.exports = model("Data_advertiser", dataAdvertiserSchema);
