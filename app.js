const path = require('path')
const api = require('./src/server/api/api')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.use('/', express.static(path.join(__dirname, '/dist')))
app.use('/api', api)

module.exports = app
