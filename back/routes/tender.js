const express = require('express');
const User = require('../models/user');
const Tender = require('../models/ivan/tenders');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const tender = await Tender.findById(req.params.id).populate('initator');
  console.log(('>>>', tender));

  res.json({ tender });
});


module.exports = router;
