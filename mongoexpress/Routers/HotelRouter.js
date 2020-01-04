var express = require('express')
var router = express.Router()
// const {Hotel} = require('../Models/Hotel')
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CON_STRING, {useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>console.log('Connected to MongoDB Atlas'))
.catch(error=>console.log(error))

const Hotel = mongoose.model('Hotel',new mongoose.Schema({
    seller: {type: String,required: true},
    city: String,
    zipCode: Number,
    address: String,
    name: String,
    price: Number,
    url: String,
    imageUrl: String
}));

router.post('/add', async (req,res)=>{
    const h = req.body;
    const hotel = new Hotel({
        seller: h.seller,
        city: h.city,
        zipCode: h.zipCode,
        address: h.address,
        name: h.name,
        price: h.price,
        url: h.url,
        imageUrl: h.imageUrl
    });
    const result = await hotel.save();
    res.send(result);
})

router.get('/termurah/:city', async (req,res)=>{
    const hotels = await Hotel.find({city: new RegExp('.*'+req.params.city+'.*', "i")})
        .limit(100)
        .sort({price: 1})
    res.json(hotels)
})

module.exports = router;