const { Schema, model } = require('mongoose');

const tenderSchema = new Schema({
  initator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  description: String,
  market: String,
  minCost: Number,
  step: Number,
  nextBet: Number,
  startDate: Date,
  finishDate: Date,
  bets: [
    {
      authtor: {
        type: Schema.Types.ObjectId,
        ref: 'Data_advertiser',
      },
      cost: Number,
    },
  ],
  status: {
    type: Boolean,
    default: true,
  },
  state: {
    type: String,
    default: 'Ещё не стартовал',
  },
  winner: {
    winnerID:  {
      type: Schema.Types.ObjectId,
      ref: 'Data_advertiser',
    },
    betWinner: Number,
  },
});

module.exports = model('Tender', tenderSchema);
