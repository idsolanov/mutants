'use strict'
const DNARegister = require('../models/DNARegisters')


function create(req, res) {
    const dnaRegister = new DNARegister({
        dna : req.body.dna,
        isMutant : req.body.isMutant
    })

    dnaRegister.save((err, document) => {
        if(err) return res.status(500).send({message: `error al crear el registro ${err}`})
        if(req.body.isMutant) return res.status(200).send()
        return res.status(403).send()
    })
}

function getAll(req, res, next) {
    DNARegister.find({},(err,list)=>{
        if(err) return res.status(500).send({message:'error en la peticion'})
        req.body.registers = list
        next()
    })
}

module.exports= {
    create,
    getAll
}