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
        this.winner === this.emptyToken) {
      return false
    }

    // Update the gameState with the player token
    gameState.grid[cell[0]][cell[1]] = gameState.currentPlayer
    // Switch token to other player
    gameState.currentPlayer = gameState.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne
    // Increment the move counter, used to check for ties
    gameState.moves++
    // Check if we have a winner
    gameState.winner = this.checkWin()

    // Returns true if the move was valid
    return true
  }

  checkWin () {
    const gameState = this.gameState

    // Check if we have a victory condition
    for (let i = 0; i < 3; i++) {
      // Check horizontal rows
      if (gameState.grid[i][0] === gameState.grid[i][1] && gameState.grid[i][1] === gameState.grid[i][2]) {
        return gameState.grid[i][0]
      }

      // Check vertical rows
      if (gameState.grid[0][i] === gameState.grid[1][i] && gameState.grid[1][i] === gameState.grid[2][i]) {
        return gameState.grid[0][i]
      }
    }

    // Check diagonal
    if ((gameState.grid[0][0] === gameState.grid[1][1] && gameState.grid[1][1] === gameState.grid[2][2]) ||
      (gameState.grid[0][2] === gameState.grid[1][1] && gameState.grid[1][1] === gameState.grid[2][0])) {
      return gameState.grid[1][1]
    }

    // Check for ties
    if (gameState.moves === gameState.maxMoves) {
      return this.tieToken
    }
    
    // Return a default value if no victory condition was met
    return this.emptyToken
  }
}
