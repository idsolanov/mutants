'use strict'

const express = require('express')
const api = express.Router()

const middleware = require('../middleware/middleware')
const controller = require('../controllers/dnaRegisterController')
const algorithms = require('../utils/algorithms')

api.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next()
});

api.get('/',middleware.healthCheck)

api.post('/mutant',middleware.isSquare,middleware.containsOnlyLetters, middleware.isMutant, controller.create)

api.get('/stats',controller.getAll,middleware.stats)

module.exports = api