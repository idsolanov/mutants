const express = require('express')
const api = express.Router()
const algorithms = require('../service/algorithms')
const {isSquare,containsOnlyMLetters,isMutant} = require('../service/algorithms')


api.get('/',(req,res)=>{
    return res.status(200).send()
})

api.post('/mutant',(req,res) => {
    if(isSquare(req.body.dna)){
        if(containsOnlyMLetters(req.body.dna)){
            var b = algorithms.isMutant(req.body.dna)
            if(b){
                return res.status(200).send()
            } else {
                return res.status(403).send()
            }
        } else {
            return res.status(403).send({
                'message':"middleware letters"
            })
        }
    } else {
        return res.status(403).send({
            'message':"middleware square"
        })
    }
    
})

api.get('/stats',(req,res)=>{
    return res.status(200).send({
        'message':'por ahora',
        'count_mutant_dna':40,
         'count_human_dna':100,
         'ratio':0.4
    })
})

module.exports = api