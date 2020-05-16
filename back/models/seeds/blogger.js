const User = require('../user')
async function foo() {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/NasAd', { useNewUrlParser: true, useUnifiedTopology: true });

  const first = await new User({
    login: 'First',
    email: 'first@mail.ru',
    password: '123',
    regDate: new Date().toLocaleTimeString(),
    auctions: ['first', 'second', 'third'],
    bets: ['first', 'second', 'third'],
    money: 5000,
    description: 'Описание'
  }).save()

  const second = await new User({
    login: 'second',
    email: 'second@mail.ru', 
    password: '123',
    regDate: new Date().toLocaleTimeString(),
    auctions: ['first', 'second', 'third'],
    bets: ['first', 'second', 'third'],
    money: 56443,
    description: 'Описание2'
  }).save()

  const third = await new User({
    login: 'third',
    email: 'third@mail.ru',
    password: '123',
    regDate: new Date().toLocaleTimeString(),
    auctions: ['first', 'second', 'third'],
    bets: ['first', 'second', 'third'],
    money: 562143,
    description: 'Описание2'
  }).save()

  const fourth = await new User({
    login: 'fourth',
    email: 'fourth@mail.ru',
    password: '123',
    regDate: new Date().toLocaleTimeString(),
    auctions: ['first', 'second', 'third'],
    bets: ['first', 'second', 'third'],
    money: 6000,
    description: 'Описание3'
  }).save()

  const fifth = await new User({
    login: 'fifth',
    email: 'fifth@mail.ru',
    password: '123',
    regDate: new Date().toLocaleTimeString(),
    auctions: ['first', 'second', 'third'],
    bets: ['first', 'second', 'third'],
    money: 7000,
    description: 'Описание4'
  }).save()

  const sixth = await new User({
    login: 'sixth',
    email: 'sixth@mail.ru',
    password: '123',
    regDate: new Date().toLocaleTimeString(),
    auctions: ['first', 'second', 'third'],
    bets: ['first', 'second', 'third'],
    money: 10000,
    description: 'Описание555'
  }).save()

  const seventh = await new User({
    login: 'seventh',
    email: 'seventh@mail.ru',
    password: '123',
    regDate: new Date().toLocaleTimeString(),
    auctions: ['first', 'second', 'third'],
    bets: ['first', 'second', 'third'],
    money: 6000,
    description: 'Описание3'
  }).save()

  const eighth = await new User({
    login: 'eighth',
    email: 'eighth@mail.ru',
    password: '123',
    regDate: new Date().toLocaleTimeString(),
    auctions: ['first', 'second', 'third'],
    bets: ['first', 'second', 'third'],
    money: 7000,
    description: 'Описание5'
  }).save()

  const ninth = await new User({
    login: 'ninth',
    email: 'ninth@mail.ru',
    password: '123',
    regDate: new Date().toLocaleTimeString(),
    auctions: ['first', 'second', 'third'],
    bets: ['first', 'second', 'third'],
    money: 9000,
    description: 'Описание8'
  }).save()

  const tenth = await new User({
    login: 'tenth',
    email: 'tenth@mail.ru',
    password: '123',
    regDate: new Date().toLocaleTimeString(),
    auctions: ['first', 'second', 'third'],
    bets: ['first', 'second', 'third'],
    money: 8000,
    description: 'Описание9'
  }).save()
  mongoose.disconnect()
}
foo()
