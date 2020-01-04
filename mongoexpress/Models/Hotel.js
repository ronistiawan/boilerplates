
const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel',{
    seller: {type: String,required: true},
    city: String,
    zipCode: Number,
    address: String,
    name: String,
    price: Number,
    url: String,
    imageUrl: String
});

module.exports = Hotel;