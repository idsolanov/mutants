const {Schema, model} = require('mongoose')


const DNARegister = new Schema({
    date: {
        type: Date,
        default: new Date()
    },
    dna: [String],
    isMutant:{
        type: Boolean,
        default : false
    }
})

module.exports = model('DNARegister', DNARegister)