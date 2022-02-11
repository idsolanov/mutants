const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes/routes')

const app = express()

const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next()
});

app.use('/',api)

  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})