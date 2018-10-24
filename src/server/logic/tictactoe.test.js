const TicTacToe = require('./tictactoe')

const game = new TicTacToe()

describe('Verify initial gameState', () => {
  it('should return an object with an the initial game state', async () => {
    const gameState = game.getGameState()

    expect(gameState.currentPlayer).toBe('X')
    expect(gameState.moves).toBe(0)
    expect(gameState.maxMoves).toBe(9)
    expect(gameState.winner).toBe(null)
    expect(gameState.validMove).toBe(false)
    expect(gameState.grid).toMatchObject([ [null, null, null], [null, null, null], [null, null, null] ])
  })
})
