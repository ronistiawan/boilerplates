require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CON_STRING, {useUnifiedTopology: true, useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

app.get('/addCat', (req,res)=>{
    const Cat = mongoose.model('Cat', { name: String });
    const kitty = new Cat({ name: 'Mussy' });
    kitty.save().then(() => console.log('Grrrrr'));
    res.send('success adding meow')
})

app.get('/cats', (req,res)=>{
    
    Cat.find({name: 'Mussy'}, (err, cats)=>{
        if(err) res.send('Failed to find Mussy')
        res.json(cats)
    })
})

app.post('/mycats', async(req,res)=>{
    
    let mycats = await Cat.find().limit(3).sort({name: -1})
    console.log(req.body)
    res.json(mycats)
})

app.listen(3000,()=> console.log('listening on port 3000'))
