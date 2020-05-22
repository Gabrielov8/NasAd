const express = require('express');
const User = require('../models/user');

const router = express.Router();
const bcrypt = require('bcrypt');

/* GET home page. */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const pass = await bcrypt.compare(password, user.password);
      if (pass) {
        req.session.user = user;
        res.json({
          message: true,
          user: user._id,
        });
      } else {
        res.json({
          err: 'Неправильный пароль',
        });
      }
    } else {
      res.json({
        err: 'Такого пользователя не существует',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    const { login, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.json({
        err: 'Такой пользователь уже существует',
      });
    } else {
      const newUser = await new User({
        login,
        email,
        password: await bcrypt.hash(password, 10),
      }).save();
      req.session.user = newUser;
      res.json({
        message: true,
        user: newUser._id,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get('/logout', (req, res) => {
  // console.log('log<<<<');
  req.session.destroy(() => {
    res.json({
      message: true,
    });
  });
});

module.exports = router;
