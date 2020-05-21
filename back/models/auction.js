const { Schema, model } = require("mongoose");

const AuctionSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  subscribers: {
    type: Number,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  usercreate:
    {
      type: Schema.Types.ObjectId,
      ref: "Data_advertiser",
    },
  participant: {
    type: Array
  },
  winner: {
    type: String,
  },
  bets: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  blogerin: []
});

module.exports = model("Auction", AuctionSchema);
