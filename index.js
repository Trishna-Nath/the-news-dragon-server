const express = require('express');
const app = express();

const cors = require('cors');

const port = process.env.port || 5000;

const catagories = require('./data/catagories.json');

app.use(cors())
app.get('/', (req, res) =>{
    res.send('dragon is running')
})

app.get('/catagories', (req,res) =>{
    res.send(catagories);
})

app.listen(port, () =>{
    console.log(`dragon API is running on port: ${port}`)
})