const express = require('express');
const User = require('../models/user');
const Tender = require('../models/ivan/tenders');

const router = express.Router();

/* GET users listing. */
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json({ user });
});

router.delete('/:id/:tenderid', async (req, res) => {
  let user = await User.findById(req.params.id);

  for (let i = 0; i < user.tenders.length; i++) {
    if (user.tenders[i]._id == req.params.tenderid) {
      user.tenders.splice(i, 1);
    }
  }
  await user.save();
  await Tender.findByIdAndDelete(req.params.tenderid)
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

  const tender = new Tender({
    title,
    market,
    minCost,
    step,
    nextBet: +minCost + +step,
    startDate,
    finishDate,
    initator: req.params.id,
  });
  const user = await User.findById(req.params.id);
  user.tenders.push(tender);
  await user.save();
  await tender.save();
  res.json({ user });
});

router.get('/currentauctions/:id', async (req, res) => {
  const tenders = await Tender.find({ status: true });
  res.json({ tenders });
});



router.get('/allauctions/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  const { tenders } = user;
  res.json({ tenders });
});

module.exports = router;
