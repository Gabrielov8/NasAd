const { Schema, model } = require('mongoose');

const tenderSchema = new Schema({
  initator: {
    type: Schema.Types.ObjectId,
    ref: 'Tag',
  },
  title: String,
  description: String,
  market: String,
  minCost: Number,
  step: Number,
  startDate: Date,
  finishDate: Date,
  bets: Array,
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = model('Tender', tenderSchema);
