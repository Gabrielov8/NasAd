// Подключаем mongoose.
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/NasAd", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const Auction = require("../../models/auction");

const entries = [
  {
    subject: "auto",
    subscribers: "new car",
    budget: 10000,
    usercreate: Tom,
  },
  {
    subject: "flowers",
    subscribers: "flowers of home",
    budget: 1000,
    usercreate: Mary,
  },
  {
    subject: "travel",
    subscribers: "all world",
    budget: 25000,
    usercreate: John,
  },
  {
    subject: "dolls",
    subscribers: "Kids toys",
    budget: 30000,
    usercreate: Samanta,
  },
  {
    subject: "motorcycle",
    subscribers: "motorcycle of sport",
    budget: 200000,
    usercreate: Sam,
  },
  {
    subject: "phone",
    subscribers: "phone brand of Samsung",
    budget: 100000,
    usercreate: Kim,
  },
  {
    subject: "TV",
    subscribers: "TV brand of LG",
    budget: 200000,
    usercreate: Jack,
  },
  {
    subject: "sport inventory",
    subscribers: "brand of Reebok",
    budget: 350000,
    usercreate: Arthur,
  },
  {
    subject: "new bag",
    subscribers: "women bags",
    budget: 6000,
    usercreate: Jolly,
  },
  {
    subject: "accessories",
    subscribers: "for all phone",
    budget: 10000,
    usercreate: Neo,
  },
];

Auction.insertMany(entries).then(() => {
  mongoose.connection.close();
});
