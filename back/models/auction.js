const { Schema, model } = require("mongoose");

const auctionSchema = new Schema({
  subject: String,
  subscribers: String,
  budget: String,
  usercreate: String,
});

module.exports = model("User", auctionSchema);
