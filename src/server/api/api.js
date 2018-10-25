const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(405).send({ error: 'GET method not allowed, try OPTIONS.' })
})

router.get('/update/:cell', (req, res) => {
  res.send(JSON.stringify({
    currentPlayer: 'X',
    grid: [ ['X', null, null], [null, null, null], [null, null, null] ],
    moves: 7,
    maxMoves: 9,
    winner: 'O',
    validMove: false
  }))
})

router.get('/reset/', (req, res) => {
  res.send(JSON.stringify({
    currentPlayer: 'X',
    grid: [ ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'] ],
    moves: 0,
    maxMoves: 9,
    winner: '-',
    validMove: false
  }))
})

module.exports = router
