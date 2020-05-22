const express = require('express');
const router = express.Router();
const parcerVk = require ('../my-parser1/app')
const Auction = require('../models/auction');
const User = require('../models/user');

router.post('/', async (req, res) => {
  try {
    const {
      subject, subscribers, budget, usercreate,
    } = req.body.newauction;

    const newAuction = await new Auction({
      subject,
      subscribers,
      budget,
      usercreate,
    }).save();
  } catch (e) {
    console.log(e);
  }
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
    console.log(user, '22');
    
    auction.bets.push(req.body.userID);
    
      auction.blogerin.push({userlogin:user.login, social: user.social, userid: user._id})
    
    user.auctions.push(auction);
    await auction.save();
    await user.save();
    res.json({ user });
  } catch (e) {
    console.log(e);
  }
});

router.post('/userinauction', async (req,res) =>{
  try{
   
    console.log('BACK')
    const auct = await Auction.findById(req.body.auctionid)
    auct.participant.push(req.body.userid)
     await auct.save()
   
  }
  catch(e){
    console.log(e);
  }

 
})

router.post('/parcer', async (req,res) =>{
  try{
   
    // console.log('BACK', req.body)
    // const user = await User.findById(req.body.userid)
    // console.log(user,'777777777777777')

    function proverk(){
      for (let index = 0; index < user.social.length; index++) {
        if (user.social[index].url === req.body.inst){
          return false
        }
        
      }
      return true
   }

  //  const proverka = proverk()
    // if (proverka) {
    const result = await parcerVk(req.body.inst)
    console.log(result);
    
   

    function middlesocial (){
      let likeall = 0;
      let vieweall = 0;
      for (let index = 0; index < result.length; index++) {
       ;
        if(result[index].likes!== '') {
        likeall += parseInt(result[index].likes)
    
        }
        
        if (result[index].views!== '' ){
          if(result[index].views.match(/K/)){
            let arr = result[index].views.split('.')
            
            if(arr[1]){
            
            vieweall += (parseInt(arr[0])*1000) + (parseInt(arr[1])*100)
            console.log(vieweall);
            }else{
              vieweall += parseInt(arr[0])*1000
              console.log(vieweall);
              

            }
            
            
          }
          else {
            vieweall += parseInt(result[index].views)
          }
        }

        if(index === result.length-1){
          console.log(likeall,'LIKE')
          const middlelike = likeall / 20;
          const middleview = vieweall / 20;
          const obj = {middlelike:middlelike,middleview:middleview, url:req.body.inst}
          return obj
        }
      }
    }

    

    const middlesoc = middlesocial()
const user = {social:[]}
console.log(middlesoc, '5555');


    user.social.push(middlesoc)
    // await user.save()
    res.json({
      message: user.social
    })
    }


   
  
  catch(e){
    console.log(e);
  }
})


router.post('/myauction', async (req,res) =>{
  try{
    const auct = await Auction.find({usercreate:req.body.userid})
    
    res.json({
      message: auct
    })
  
   
  }
  catch(e){
    console.log(e);
  }

 
})

router.post('/selectbloger', async (req,res) =>{
  try{
    console.log(req.body,'tigran');

    const user = await User.findById(req.body.userid)
    const auction = await Auction.findById(req.body.auctionid)
    auction.winner = req.body.userid
    await auction.save()
    await user.save()
  }
  catch(e){
    console.log(e);
  }

 
})






module.exports = router;
