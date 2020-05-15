const { model, Schema } = require('mongoose');

const blogerSchema = new Schema({
  login: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  regDate: Date,
  auctions: Array,
  bets: Array,
  money: Number,
  description: String,
});

const Bloger = new model('Blogers', blogerSchema);

module.exports = Bloger;
