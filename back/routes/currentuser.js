const express = require('express');
const User = require('../models/user');
const Tender = require('../models/ivan/tenders');

const router = express.Router();

/* GET users listing. */
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json({ user });
});

router.put('/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { description: req.body.userInfo.text });
  const user = await User.findById(req.params.id);
  res.json({ user });
});

router.post('/newauction/:id', async (req, res) => {
  const {
    title, market, minCost, step, startDate, finishDate,
  } = req.body.newAuc;
  const auction = new Tender({
    title,
    market,
    minCost,
    step,
    startDate,
    finishDate,
    initator: req.params.id,
  });
  const user = await User.findById(req.params.id);
  user.tenders.push(auction);
  await user.save();
  await auction.save();
  res.json({ user });
});

router.get('/currentauctions/:id', async (req, res) => {
  const auctions = await Tender.find({ status: true });
  res.json({ auctions });
});

router.get('/allauctions/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  const { tenders } = user;
  res.json({ tenders });
});

module.exports = router;
