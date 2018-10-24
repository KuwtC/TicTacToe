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

  makeMove (cell) {
    let gameState = this.gameState // This works because Objects are passed by reference and not by value

    // Check if the move was valid or if the game has ended
    if (gameState.grid[cell[0]][cell[1]] !== this.emptyToken ||
        this.checkWin() === false) {
      return false
    }

    // Update the gameState with the player token
    gameState.grid[cell[0]][cell[1]] = gameState.currentPlayer
    // Switch token to other player
    gameState.currentPlayer = gameState.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne
    // Increment the move counter, used to check for ties
    gameState.moves++

    // Returns true if the move was valid
    return true
  }

  checkWin () {
    return this.emptyToken
  }
}
