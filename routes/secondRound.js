const express = require('express')
const Router = express.Router()
const secondRoundController = require('../controller/secondRound')
Router.put('/secondRound/score/:id', secondRoundController.secondRound)

module.exports = Router