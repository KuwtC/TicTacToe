const express = require('express')
const router = express.Router()
const TicTacToe = require('../logic/tictactoe')
const game = new TicTacToe()

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
  game.newGame()
  var gameState = game.getGameState()
  res.send(JSON.stringify({
    gameState
  }))

})

module.exports = router
