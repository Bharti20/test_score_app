const knex = require('../model/connection')

module.exports.firstRound = (req, res) => {
    let testScore = {
        id: req.body.id,
        first_round: req.body. first_round 
    }
    knex('condidate_test_score').insert(testScore).then(() => {
        res.send('First Round Test Done')
    }).catch((err) => {
        res.send(err)
    });
};