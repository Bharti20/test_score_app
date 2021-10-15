const knex = require('../model/connection')

module.exports.showScores = (req, res) => {
    knex('candidate')
    .join('condidate_test_score', 'candidate.id', '=', 'condidate_test_score.id')
    // .where('candidate.id', req.params.id)
    .select('candidate.id', 'name','condidate_test_score.first_round', 'second_round', 'third_round')
    .then((candidateData) => {
        res.send(candidateData)
    }).catch((err) => {
        res.send(err)
    });
};