'use strict'

const mongoose = require('mongoose')
const app = require('./src/app')

const port = 3000
const local = 'localhost'
const docker = 'mongo-db'
const dbUri = "mongodb://"+docker+":27017/mutants"
var server = Object
mongoose.connect(dbUri,{useNewUrlParser: true,useUnifiedTopology: true},(err,res)=>{
    if(err) {
        return console.log(`error al conectar a la base de datos:${err}`)
    }
    console.log('conexion establecida con la base de datos')

    server = app.listen(port,()=>{
        console.log(`Micro Servicio Corriendo en http://localhost:${port}`)
    })
    
})

module.exports = {
    app,
    server
}

