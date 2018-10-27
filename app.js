const path = require('path')
const api = require('./src/server/api/api')
const express = require('express')
const app = express()

app.use('/', express.static(path.join(__dirname, '/dist')))
app.use('/api', api)

module.exports = app
