'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const DNARegister = Schema({
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

module.exports = mongoose.model('DNARegister', DNARegister)