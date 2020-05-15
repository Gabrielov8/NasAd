const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const {subject, nameBlogger, cash} = req.body;
  console.log(subject, nameBlogger, cash , '<<<<<');
  
  res.json({check: 'done'});
});

module.exports = router;
