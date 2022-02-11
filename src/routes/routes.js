const express = require('express')
const api = express.Router()
const algorithms = require('../utils/algorithms')
const dnaRegisterController = require('../controllers/dnaRegisterController')
const {isSquare,containsOnlyMLetters,isMutant} = require('../utils/algorithms')


api.get('/',(req,res)=>{
    return res.status(200).send()
})

api.post('/mutant',(req,res) => {
    if(isSquare(req.body.dna)){
        if(containsOnlyMLetters(req.body.dna)){
            var b = algorithms.isMutant(req.body.dna)
            if(b){
                dnaRegisterController.create(req.body.dna,b)
                return res.status(200).send()
            } else {
                dnaRegisterController.create(req.body.dna,b)
                return res.status(403).send()
            }
        } else {
            return res.status(403).send()
        }
    } else {
        return res.status(403).send()
    }
    
})

api.get('/stats',async (req,res)=>{
    const resultList  = await dnaRegisterController.getAll()
    var count_mutant_dna = 0
    var count_human_dna = 0    
    for(let i = 0; i<resultList.length; i++){
        if (resultList[i].isMutant){
            count_mutant_dna ++
        } else {
            count_human_dna ++
        }
    }
    var total = count_human_dna + count_mutant_dna
    var ratio = (count_human_dna == 0 && count_mutant_dna == 0)? 0: (count_mutant_dna * 1) / total
    return res.status(200).send({
        'count_mutant_dna':count_mutant_dna,
         'count_human_dna':count_human_dna,
         'ratio': ratio
    })
})

module.exports = api