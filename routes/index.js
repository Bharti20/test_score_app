const express = require('express')
const Router = express.Router()

const condidateRoute = require('./condidate')
const firstRoundRoute = require('./firstRound')
const secondRoundRoute = require('./secondRound')
const thirdRoundRoute = require('./thirdRound')

Router.use('/', condidateRoute)
Router.use('/', firstRoundRoute)
Router.use('/', secondRoundRoute)
Router.use('/', thirdRoundRoute)


module.exports = Router

