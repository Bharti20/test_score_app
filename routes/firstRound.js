const express = require('express')
const Router = express.Router()
const firstRound = require('../controller/firstRound')

Router.post('/firstRound/score', firstRound.firstRound)

module.exports = Router
