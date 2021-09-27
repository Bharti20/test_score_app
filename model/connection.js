const KNEX = require('knex')({
    client: 'mysql',
    connection: {
        user: 'root',
        host: 'localhost',
        password: 'Bharti@1234',
        database: 'test_score' 
    }

});
// KNEX.schema.createTable('candidate', (table) => {
//     table.increments('id');
//     table.string('name');
//     table.string('email')
// })
// KNEX.schema.createTable('condidate_test_score', (table) => {
//     table.increments('id');
//     table.integer('first_round');
//     table.integer('second_round');
//     table.integer('third_round')
// })
// .then(() => {
//     console.log('Database is connected')
// }).catch((err) => {
//     console.log(err)
// });

module.exports = KNEX