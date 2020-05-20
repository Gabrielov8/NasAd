const express = require("express");
const router = express.Router();
const DataAdvertiser = require("../../models/advertiser/dataAdvertiser");
const Tender = require("../../models/ivan/tenders");
const Auction = require("../../models/auction");

router.post("/", async (req, res) => {
  const { subject, nameBlogger, cash, creator } = req.body;
  await DataAdvertiser.findByIdAndUpdate({ _id: creator} ,{
    creator: creator,
    subject: subject,
    nameBlogger: nameBlogger,
    cash: cash,
    active: true,
  });
  res.json({ message: true });
});

router.post("/getData", async (req, res) => {
  let { creator } = req.body;
  let arrayData = await DataAdvertiser.find({ creator: creator });
  res.json({ arrayData: arrayData });
});

router.post("/idBargaining", async (req, res) => {
  let { id } = req.body;
  await DataAdvertiser.findByIdAndUpdate(id, { active: false });
  res.end();
});

router.get("/getTender", async (req, res) => {
  const tender = await Tender.find();
  res.json({ tender });
});

router.post("/findWinInAuction", async (req, res) => {
  let { idOrganizer } = req.body;
  let findWin = await Auction.find({ winner: idOrganizer });
  res.json({ findWin });
});

router.post("/searchAuction", async (req, res) => {
  let { subscribers, budget } = req.body;
  let find = await Auction.find({ subscribers: subscribers, budget: budget });
  res.json({ find });
});

router.post("/searchTender", async (req, res) => {
  let { market, minCost } = req.body;
  let findTenders = await Tender.find({ market: market, minCost: minCost });
  // let ans = findTenders.filter
  res.json({ findTenders });
});

module.exports = router;
