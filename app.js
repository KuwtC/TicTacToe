const api = require('./src/server/api/api')
const express = require('express')
const app = express()

app.use('/api', api)

module.exports = app
