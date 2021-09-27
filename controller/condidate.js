const knex = require('../model/connection')

module.exports.addCondidate = (req, res) => {
    let userDetails = {
        name: req.body.name,
        email: req.body.email
    }
    knex('candidate').insert(userDetails).then(() => {
        res.send('Condidate data has added')
    }).catch((err) => {
        res.send(err)
        console.log(err)
    });
};