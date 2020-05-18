const createError = require('http-errors');
const express = require('express');
const session = require('express-session')
const path = require('path');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongodb-session')(session)
const logger = require('morgan');
const dbConnect = require('./models/db-connect')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const advertisersRouter = require('./routes/advertiser/advertiser')
const authRouter = require('./routes/auth')
const advertiserRouter = require('./routes/advertiser')

const app = express();

const store = new MongoStore({
  collection: 'sessions',
  uri: `mongodb://localhost:27017/NasAd`
})

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
  store
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/advertiser', advertisersRouter);
app.use('/auth', authRouter);
app.use('/adAuth', advertiserRouter);

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

module.exports = app;
