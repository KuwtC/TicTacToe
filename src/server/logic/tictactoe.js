'use strict'
module.exports = class TicTacToe {
  constructor () {
    this.emptyToken = null
    this.tieToken = 'T'
    this.playerOne = 'X'
    this.playerTwo = 'O'
    this.maxMoves = 9

    // Start with a clean board
    this.newGame()
  }

  newGame () {
    this.gameState = {
      currentPlayer: this.playerOne,
      grid: [ [null, null, null], [null, null, null], [null, null, null] ],
      moves: 0,
      maxMoves: this.maxMoves,
      winner: this.emptyToken,
      validMove: false
    }
  }

  getGameState () {
    return this.gameState
  }
}
