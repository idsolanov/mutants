'use strict'
const express = require('express')

const algorithms = require('../utils/algorithms')

function healthCheck(req, res, next){
    return res.status(200).send()
}

function isSquare(req, res, next){
    const square = algorithms.isSquare(req.body.dna)
    if (square){
        next()
    } else {
        return res.status(400).send()
    }
}

function containsOnlyLetters(req, res, next) {
    const letters = algorithms.containsOnlyMLetters(req.body.dna)
    if(letters){
        next()
    } else {
        return res.status(400).send()
    }
    
}

function isMutant(req, res, next){
    const mutant = algorithms.isMutant(req.body.dna)
    if(mutant){
        req.body.isMutant = mutant
        next()
    } else {
        req.body.isMutant = mutant
        next()
    }
}

function stats(req, res, next) {
    const obj = algorithms.stats(req.body.registers)
    return res.status(200).send(obj)
}

module.exports = {
    healthCheck,
    isSquare,
    containsOnlyLetters,
    isMutant,
    stats
}