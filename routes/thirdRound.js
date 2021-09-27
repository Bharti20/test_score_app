const express = require('express')
const Router = express.Router()
const thirdRoundController = require('../controller/thirdRound')
Router.put('/thirdRound/score/:id', thirdRoundController.thirdRound)


module.exports = Router