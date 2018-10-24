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

describe('TicTacToe logic test with a victory', () => {
  it('should return the board after one move, player X to [2, 1]', () => {
    expect(game.makeMove([2, 1])).toBe(true)
    const gameState = game.getGameState()

    expect(gameState.grid).toMatchObject([ [null, null, null], [null, null, null], [null, 'X', null] ])
    expect(gameState.winner).toBe(null)
  })

  it('should return the board after two moves, player O to [2, 1]', () => {
    expect(game.makeMove([2, 1])).toBe(false)
    const gameState = game.getGameState()

    expect(gameState.grid).toMatchObject([ [null, null, null], [null, null, null], [null, 'X', null] ])
    expect(gameState.winner).toBe(null)
  })

  it('should return the board after two moves, player O to [0, 0]', () => {
    expect(game.makeMove([0, 0])).toBe(true)
    const gameState = game.getGameState()

    expect(gameState.grid).toMatchObject([ ['O', null, null], [null, null, null], [null, 'X', null] ])
    expect(gameState.winner).toBe(null)
  })
})
