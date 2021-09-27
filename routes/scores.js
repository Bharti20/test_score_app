const express = require('express')
const Router = express.Router()
const scoreController = require('../controller/score')

Router.get('/candidates/showScores', scoreController.showScores)

module.exports = Router