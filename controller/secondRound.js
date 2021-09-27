const knex = require('../model/connection')

module.exports.secondRound = (req, res) => {
    knex('condidate_test_score')
    .where({id: req.params.id})
    .update({second_round: req.body.second_round})
    .then(() => {
        res.send('Second Round Test Done')
    }).catch((err) => {
        res.send(err)
    });
};