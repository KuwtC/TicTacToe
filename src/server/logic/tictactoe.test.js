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

describe('TicTacToe logic test with vertical victories', () => {
  let gameState = game.getGameState()

  it('should return the board after one move, player X to [2, 1]', () => {
    expect(game.makeMove([2, 1])).toBe(true)
    gameState = game.getGameState()

    expect(gameState.grid).toMatchObject([ [null, null, null], [null, null, null], [null, 'X', null] ])
    expect(gameState.currentPlayer).toBe('O')
    expect(gameState.winner).toBe(null)
  })

  it('should return the board after two moves, player O to [2, 1]', () => {
    expect(game.makeMove([2, 1])).toBe(false)
    gameState = game.getGameState()

    expect(gameState.grid).toMatchObject([ [null, null, null], [null, null, null], [null, 'X', null] ])
    expect(gameState.currentPlayer).toBe('O')
    expect(gameState.winner).toBe(null)
  })

  it('should return the board after two moves, player O to [0, 0]', () => {
    expect(game.makeMove([0, 0])).toBe(true)
    gameState = game.getGameState()

    expect(gameState.grid).toMatchObject([ ['O', null, null], [null, null, null], [null, 'X', null] ])
    expect(gameState.currentPlayer).toBe('X')
    expect(gameState.winner).toBe(null)

    expect(game.makeMove([1, 2])).toBe(true)
    expect(game.makeMove([1, 1])).toBe(true)
    expect(game.makeMove([2, 2])).toBe(true)
    expect(game.makeMove([2, 0])).toBe(true)
    expect(game.makeMove([0, 2])).toBe(true)
    // gameState = game.getGameState()

    expect(gameState.grid).toMatchObject([ ['O', null, 'X'], [null, 'O', 'X'], ['O', 'X', 'X'] ])
    expect(gameState.currentPlayer).toBe('O')
    expect(gameState.winner).toBe('X')
  })
})
