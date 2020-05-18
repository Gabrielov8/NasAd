const express = require('express');
const User = require('../models/user');
const Tender = require('../models/ivan/tenders');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const tender = await Tender.findById(req.params.id);
  res.json({ tender });
});


module.exports = router;
