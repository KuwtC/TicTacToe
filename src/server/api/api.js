const express = require('express')
const router = express.Router()
const TicTacToe = require('../logic/tictactoe')
const game = new TicTacToe()

// Make a move
router.get('/update/:cell', (req, res) => {
  game.makeMove(req.params.cell.split(','))
  var gameState = game.gameState
  res.send(JSON.stringify({
    gameState
  }))
})

// Reset game (get new game)
router.get('/reset/', (req, res) => {
  game.newGame()
  var gameState = game.getGameState()
  res.send(JSON.stringify({
    gameState
  }))
})

// Get gamestate
router.get('/state/', (req, res) => {
  let gameState = game.getGameState()
  res.send(JSON.stringify({
    gameState
  }))
})
module.exports = router
