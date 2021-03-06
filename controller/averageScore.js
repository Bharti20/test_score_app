const knex = require('../model/connection')
module.exports.average = (req, res) => {
    knex('candidate')
    .join('condidate_test_score', 'candidate.id', '=', 'condidate_test_score.id')
    //.where('candidate.id', req.params.id)
    .select('candidate.id', 'name','condidate_test_score.first_round', 'second_round', 'third_round')
    .then((candidateData) => {
        let i = 0
        let sum = 0
        while(i<candidateData.length) {
            sum = sum + candidateData[i]['first_round'] + candidateData[i]['second_round'] + candidateData[i]['third_round']
            let average = Math.floor(sum/3)
            candidateData[i]['Average'] = average
            sum = 0
            i++
        }
        res.send(candidateData)
    }).catch((err) => {
        res.send(err)
    });
};