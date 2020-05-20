const express = require('express');

const router = express.Router();
const Auction = require('../models/auction');
const User = require('../models/user');

router.post('/', async (req, res) => {
  try {
    const {
      subject, subscribers, budget, usercreate,
    } = req.body.newauction;
    // console.log(req.body);

    const newAuction = await new Auction({
      subject,
      subscribers,
      budget,
      usercreate,
    }).save();
  } catch (e) {
    console.log(e);
  }
  // console.log(req.body);
  res.json({
    message: true,
  });
});


router.post('/allauction', async (req, res) => {
  try {
    const allAuction = await Auction.find();
    res.json({
      message: allAuction,
    });
  } catch (e) {
    console.log(e);
  }
});

router.get('/allactive/:id', async (req, res) => {
  try {
    const allAuction = await Auction.find();
    let temp;
    const auctions = [];
    for (let index = 0; index < allAuction.length; index++) {
      temp = allAuction[index].bets.indexOf(req.params.id);
      if (temp === -1) {
        auctions.push(allAuction[index]);
      }
    }
    res.json({
      message: auctions,
    });
  } catch (e) {
    console.log(e);
  }
});

router.post('/newbet', async (req, res) => {
  try {
    const auction = await Auction.findById(req.body.auctionID);
    const user = await User.findById(req.body.userID);
    auction.bets.push(req.body.userID);
    user.auctions.push(auction);
    await auction.save();
    await user.save();
    res.json({ user });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
