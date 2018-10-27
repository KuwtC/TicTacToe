const express = require('express')
const router = express.Router()
const TicTacToe = require('../logic/tictactoe')
const game = new TicTacToe()

router.get('/', (req, res) => {
  res.status(405).send({ error: 'GET method not allowed, try OPTIONS.' })
})

//make a move
router.get('/update/:cell', (req, res) => {
  game.makeMove(req.params.cell.split(','))
  var gameState = game.gameState
  res.send(JSON.stringify({
    gameState
  }))
})

//reset game(get new game)
router.get('/reset/', (req, res) => {
  game.newGame()
  var gameState = game.getGameState()
  res.send(JSON.stringify({
    gameState
  }))
})

//get gamestate  
router.get('/state/', (req, res) => {
  let gameState = game.getGameState()
  res.send(JSON.stringify({
    gameState
  }))
})
module.exports = router
