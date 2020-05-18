const Advertiser = require('../models/advertiser/dataAdvertiser')
const express = require('express');
const bcrypt = require('bcrypt')

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const advertiser = await Advertiser.findOne({ email })
    if (advertiser) {
      const pass = await bcrypt.compare(password, advertiser.password)
      if (pass) {
        req.session.advertiser = advertiser;
        res.json({
          message: true,
          advertiser: advertiser._id
        })
      } else {
        res.json({
          err: 'Неправильный пароль'
        })
      }
    } else {
      res.json({
        err: 'Такого пользователя не существует'
      })
    }
  } catch (err) {
    console.log(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    const { login, email, password } = req.body
    const advertiser = await Advertiser.findOne({ email })
    if (advertiser) {
      res.json({
        err: 'Такой пользователь уже существует'
      })
    } else {
      const newAdvertiser = await new Advertiser({
        login,
        email,
        password: await bcrypt.hash(password, 10)
      }).save()
      req.session.advertiser = newAdvertiser
      res.json({
        message: true,
        advertiser: newAdvertiser._id
      })
    }
  } catch (err) {
    console.log(err)
  }
})


module.exports = router;

