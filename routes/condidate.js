const express = require('express')
const Router = express.Router()
const condidateController = require('../controller/condidate')

Router.post('/condidateDetails', condidateController.addCondidate)


module.exports = Router
