const knex = require('../model/connection')

module.exports.showScores = (req, res) => {
    knex('candidate')
    .join()
}