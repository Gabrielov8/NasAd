const { Schema, model } = require('mongoose');

const dataAdvertiserSchema = new Schema({
  login: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  auctionBets: Array,
  tenderBets: Array,
  creator: String,
  subject: String,
  nameBlogger: String,
  cash: Number,
  active: Boolean,
});

module.exports = model("Data_advertiser", dataAdvertiserSchema);
