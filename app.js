const express = require('express')
const app = express()
const callApis = require('./routes/index')
app.use(express.json())

app.use('/', callApis)

app.listen(8000, (err) => {
    if(err) throw err;
    console.log('server is running')
});