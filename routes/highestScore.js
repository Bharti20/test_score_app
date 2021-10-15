const express = require('express')
const Router = express.Router()
const highestAverageCon = require('../controller/highestScore')

Router.get('/highestScore', highestAverageCon.highestScore)

module.exports = Router
