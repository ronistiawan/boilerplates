require('dotenv').config()
const express = require('express')
const app = express()

var HotelRouter = require('./Routers/HotelRouter')

app.use('Hotel', HotelRouter);

app.listen(3000,()=> console.log('listening on port 3000'))
