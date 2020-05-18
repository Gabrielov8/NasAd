const express = require('express');
const router = express.Router();
const Auction = require('../models/auction')

router.post('/', async (req,res) =>{
  try{
    const {subject,subscribers,budget,usercreate} = req.body.newauction
    // console.log(req.body);
    
    const newAuction = await new Auction({
      subject,
      subscribers,
      budget,
      usercreate
    }).save()
    
  }
  catch(e){
    console.log(e);
  }
  // console.log(req.body);
  res.json({
    message: true
  })
})


router.post('/allauction', async (req,res) =>{
  try{
   
    // console.log('BACK')
    const allAuction = await Auction.find({})
// console.log(allAuction,'777')
res.json({
  message: allAuction
})
    
  }
  catch(e){
    console.log(e);
  }

 
})

module.exports = router;
