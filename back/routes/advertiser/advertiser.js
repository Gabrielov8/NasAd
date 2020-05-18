const express = require("express");
const router = express.Router();
const DataAdvertiser = require("../../models/advertiser/dataAdvertiser");
const Tender = require('../../models/ivan/tenders')

router.post("/", async (req, res) => {
  const { subject, nameBlogger, cash, creator } = req.body;
  await DataAdvertiser.create({
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
module.exports = router;

router.post("/idBargaining", async (req, res) => {
  let { id } = req.body;
  await DataAdvertiser.findByIdAndUpdate(id, { active: false });
  res.end();
});



router.get("/getTender", async (req, res) => {
  const tender = await Tender.find();
  // console.log(tender);
  
  res.json({ tender });
});
module.exports = router;

// router.post("/findWinInAuction", async (req, res) => {
//   let { idOrganizer } = req.body;
//   let findWin = await NONE.find({ win: idOrganizer });
//   res.json({ findWin });
// });
// module.exports = router;



