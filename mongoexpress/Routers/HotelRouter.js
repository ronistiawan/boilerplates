var express = require('express')
var router = express.Router()
const {Hotel} = require('../Models/Hotel')
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CON_STRING, {useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>console.log('Connected to MongoDB Atlas'))
.catch(error=>console.log(error))

router.post('/add', async (req,res)=>{
    console.log(req.body);
    const hotel = new Hotel(JSON.parse(req.body));
    const result = await hotel.save();
    res.send(result);
})

router.get('/City/:city', async (req,res)=>{
    var hotels = await Hotel.find({city: city})
    res.json(hotels)
})

router.get('/termurah', async (req,res)=>{
    const hotels = await Hotel.find().limit(100).sort({price: 1})
    res.json(hotels)
})

module.exports = router;