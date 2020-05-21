const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongodb-session')(session);
const logger = require('morgan');


const Tender = require('./models/ivan/tenders');
const Advertiser = require('./models/advertiser/dataAdvertiser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const auctionRouter = require('./routes/auction');
const advertiserRouter = require('./routes/advertiser');
const tenderRouter = require('./routes/tender');
const currentUserRouter = require('./routes/currentuser');
const advertisersRouter = require('./routes/advertiser/advertiser');


const app = express();
const expressWs = require('express-ws')(app);

const dbConnect = require('./models/db-connect');


const store = new MongoStore({
  collection: 'sessions',
  uri: 'mongodb://localhost:27017/NasAd',
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret mes',
  resave: false,
  saveUninitialized: false,
  store,
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/advertiser', advertisersRouter);

app.use('/currentuser', currentUserRouter);
app.use('/currenttender', tenderRouter);

app.use('/auth', authRouter);
app.use('/adAuth', advertiserRouter);

app.use('/auction', auctionRouter);

app.ws('/echo', (ws, req) => {
  ws.on('message', async (msg) => {
    const { clients } = expressWs.getWss();
    const bet = await JSON.parse(msg);

    if (bet.currentDate) {
      // const tender = await Tender.findById(bet.id).populate({
      //   path: 'bets',
      //   populate: {
      //     path: 'authtor',
      //     model: 'Data_advertiser'
      //   }
      // })
      const tender = await Tender.findById(bet.id).populate('bets.authtor')
      console.log(tender, '<<<<<<<');
      const start = Date.parse(tender.startDate);
      const finish = Date.parse(tender.finishDate);

      if (start < bet.currentDate && bet.currentDate < finish) {
        tender.state = 'Аукцион стартовал',
          await tender.save();
        clients.forEach((clientWS) => clientWS.send(JSON.stringify(tender)));
      } else if (bet.currentDate > finish) {
        tender.state = 'Аукцион завершён';
        const i = tender.bets.length - 1;
        tender.winner.winnerID = tender.bets[i].author;
        tender.winner.betWinner = tender.bets[i].cost;
        tender.status = false,
          await tender.save();
        clients.forEach((clientWS) => clientWS.send(JSON.stringify(tender)));
      }
    } else {
      const tender = await Tender.findById(bet.tenderId);
      tender.nextBet = +bet.bet + tender.step;
      tender.bets.push({
        authtor: bet.orgId,
        cost: bet.bet,
      });
      await tender.save();
      const advertiser = await Advertiser.findById(bet.orgId);
      advertiser.tenderBets.push({ tender: bet.tenderId, cost: bet.bet });
      await advertiser.save();
      clients.forEach((clientWS) => clientWS.send(JSON.stringify(tender)));
    }
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3001);

module.exports = app;
