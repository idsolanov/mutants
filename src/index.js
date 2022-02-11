const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const api = require('./routes/routes')

const app = express()

const port = 3000
const dbUri = "mongodb://127.0.0.1:27017/mutants"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next()
});

app.use('/',api)

  
app.listen(port, () => {
    mongoose.connect(dbUri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log(`Example app listening on port ${port}`)
})

mongoose.connection.on('open',()=>{
    console.log('Conectado a la base de datos : '+ dbUri)
})

mongoose.connection.on('error', (err)=>{
    console.log(err)
})