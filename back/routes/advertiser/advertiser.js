const express = require("express");
const router = express.Router();
const DataAdvertiser = require("../../models/advertiser/dataAdvertiser");

router.post("/", async (req, res, next) => {
  const { subject, nameBlogger, cash } = req.body;
  await DataAdvertiser.create({
    creator: "user",
    subject: subject,
    nameBlogger: nameBlogger,
    cash: cash,
  });
  next();
});

router.get("/getData", async (req, res) => {
  let data = await DataAdvertiser.find({});
  console.log(data);
  let middleCount =
    data.reduce((sum, count) => sum + count.cash, 0) / data.length;
  res.json({
    middleCount: middleCount.toFixed(2),
    allBargaining: data.length,
    masBargaining: data,
  });
});
module.exports = router;
