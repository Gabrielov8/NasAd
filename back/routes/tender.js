const express = require('express');
const Tender = require('../models/ivan/tenders');

const router = express.Router();

router.get('/:id', async (req, res) => {
  // const tender = await Tender.findById(req.params.id)
  const tender = await Tender.findById(req.params.id).populate('bets.authtor')
  console.log(tender, '<<<<<<<');
  res.json({ tender });
});


module.exports = router;
