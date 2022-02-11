const DNARegister = require('../models/DNARegisters')


function create(dnaInput, isMutantInput) {
    const dnaRegister = new DNARegister({
        dna : dnaInput,
        isMutant : isMutantInput
    })

    dnaRegister.save((err, document) => {
        if(err){
            console.log(err)
        }else {
            console.log(document)
        }
    })
}

async function getAll() {
    return await DNARegister.find()
}

module.exports= {
    create,
    getAll
}