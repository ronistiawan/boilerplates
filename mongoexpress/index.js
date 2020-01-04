require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json());

var HotelRouter = require('./Routers/HotelRouter')
var TestRouter = require('./Routers/TestRouter')
app.use('/Hotel', HotelRouter);
app.use('/Test', TestRouter);

app.listen(3000,()=> console.log('listening on port 3000'))
