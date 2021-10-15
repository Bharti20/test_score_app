const express = require('express')
const Router = express.Router()
const averageController = require('../controller/averageScore')

Router.get('/averageScores', averageController.average)

module.exports = Router