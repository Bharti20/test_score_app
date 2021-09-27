const knex = require('../model/connection')
module.exports.average = (req, res) => {
    knex('candidate')
    .join('condidate_test_score', 'candidate.id', '=', 'condidate_test_score.id')
    .select('candidate.id', 'name','condidate_test_score.first_round'+'second_round'+'third_round')
    .then((candidateData) => {
        // let i = 0
        // while(i<candidateData.length) {
        //     let sum = sum + candidateData[i]['first_round'] + candidateData[i]['second_round'] + candidateData[i]['third_round']
        //     let average = Math.floor(sum/3)

           
        // }
        res.send(candidateData)
    }).catch((err) => {
        res.send(err)
    });
};