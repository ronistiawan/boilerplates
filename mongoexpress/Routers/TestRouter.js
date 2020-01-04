var express = require('express')
var router = express.Router()

router.post('/add', async (req,res)=>{
    console.log(req.body);
    res.send('result');
})

router.get('/City/:city', async (req,res)=>{
    console.log(`city: ${city}`)
    res.send(city)
})

module.exports = router;