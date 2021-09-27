const knex = require('../model/connection')

module.exports.thirdRound = (req, res) => {
    knex('condidate_test_score')
    .where({id: req.params.id})
    .update({third_round: req.body. third_round})
    .then(() => {
        res.send('Third Round Test Done')
    }).catch((err) => {
        res.send(err)
    });
};