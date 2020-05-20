const { Schema, model } = require("mongoose");

const AuctionSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  subscribers: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  usercreate: {
    type: String,
  },
  winner: {
    type: String,
  },
});

module.exports = model("Auction", AuctionSchema);
