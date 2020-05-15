const express = require('express');
const Bloger = require('../models/Bloger');

const router = express.Router();

/* GET users listing. */
router.get('/:id', (req, res) => {
  const user = Bloger.findById(req.params.id);
  res.json({ user });
});

router.put('/:id', async (req, res) => {
  await Bloger.findByIdAndUpdate(req.params.id, { info: req.body.userInfo });
  const user = await Bloger.findById(req.params.id);
  res.json({ user });
});

module.exports = router;
