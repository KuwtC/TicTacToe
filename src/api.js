const express = require('express')
const app = express()

app.get('/helloworld', (req, res) => {
  res.send({ hello: 'world' })
})

module.exports = app
