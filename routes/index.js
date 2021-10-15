const express = require('express')
const Router = express.Router()

const condidateRoute = require('./condidate')
const firstRoundRoute = require('./firstRound')
const secondRoundRoute = require('./secondRound')
const thirdRoundRoute = require('./thirdRound')
const showScoresRoute = require('./scores')
const averageRoute = require('./averageScore')
const highestScoreR = require('./highestScore')

Router.use('/', condidateRoute)
Router.use('/', firstRoundRoute)
Router.use('/', secondRoundRoute)
Router.use('/', thirdRoundRoute)
Router.use('/', showScoresRoute)
Router.use('/', averageRoute)
Router.use('/',highestScoreR )

module.exports = Router

