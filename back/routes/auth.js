const express = require('express');

const router = express.Router();

/* GET home page. */
router.post('/login', (req, res) => {
  console.log(req.body)
  res.end()
});

router.post('/register', (req, res) => {
  console.log(req.body)
  res.end()
})

module.exports = router;
