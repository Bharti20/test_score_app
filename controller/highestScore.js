const knex = require('../model/connection')
module.exports.highestScore = (req, res) => {
    knex('candidate')
    .join('condidate_test_score', 'candidate.id', '=', 'condidate_test_score.id')
    .select('candidate.id', 'name','condidate_test_score.first_round', 'second_round', 'third_round')
    .then((candidateData) => {
        let i = 0
        let sum = 0
        let scoresObj = {}
        let scores = []
        while(i<candidateData.length) {
            sum = sum + candidateData[i]['first_round'] + candidateData[i]['second_round'] + candidateData[i]['third_round']
            scores.push(sum)
            scoresObj[candidateData[i]['name']] = sum
            sum = 0
            i++
        }
        let highestScore = Math.max(...scores)
        for(i in scoresObj) {
            var value = scoresObj[i]
            if(value == highestScore) {
                break;
            }
        }
        let obj = {}
        obj[i] = highestScore
        res.send(obj)
    }).catch((err) => {
        res.send(err)
    });
};