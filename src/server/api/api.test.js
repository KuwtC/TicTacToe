const request = require('supertest')
const app = require('../../../app')
const TicTacToe = require('../logic/tictactoe')
const game = new TicTacToe()

describe('GET /api/update/:cell', () => {
  it('should return an object with a updated game (new move has been made)', async () => {
    const cell = '0,0'
    const res = await request(app).get(`/api/update/${cell}`)

    expect(res.status).toBe(200)
    // Make a move with cell and get updated gamestate
    game.makeMove(cell)
    var gameState = game.getGameState()

    // Game state should return true on validMove
    expect(['X', 'O'].includes(gameState.currentPlayer)).toBe(true)
    expect(gameState.moves).toBeGreaterThanOrEqual(0)
    expect(gameState.moves).toBeLessThanOrEqual(9)
    expect(gameState.maxMoves).toBe(9)
    expect([true, false].includes(gameState.validMove)).toBe(true)
    expect(['X', 'O', 'T', null].includes(gameState.winner)).toBe(true)

    // Iterate through the grid and check each cell
    gameState.grid.map((row) => {
      row.map((cell) => {
        expect([null, 'X', 'O']).toContain(cell)
      })
    })

    let currPlayer = gameState.currentPlayer
    let currMoves = gameState.moves

    // Make another move with cell and get updated gamestate validMove
    gameState.validMove = game.makeMove(cell).validMove

    // Game state should return false on validMove
    expect(gameState.currentPlayer).toBe(currPlayer)
    expect(gameState.moves).toBe(currMoves)
    expect([true, false].includes(gameState.validMove)).toBe(false)
    expect(['X', 'O', 'T', null].includes(gameState.winner)).toBe(true)

    // Iterate through the grid and check each cell
    gameState.grid.map((row) => {
      row.map((cell) => {
        expect([null, 'X', 'O']).toContain(cell)
      })
    })
  })
})

describe('GET /api/reset/', () => {
  it('should return an object with a new game (board has been reset)', async () => {
    const res = await request(app).get('/api/reset/')

    expect(res.status).toBe(200)
    // Initialize a new game and get updated gamestate
    game.newGame()
    var gameState = game.getGameState()

    expect(gameState.currentPlayer).toBe('X')
    expect.arrayContaining(gameState.grid)
    expect(gameState.moves).toBe(0)
    expect(gameState.maxMoves).toBe(9)
    expect(gameState.winner).toBeNull()
    expect([true, false].includes(gameState.validMove)).toBe(true)
  })
})

describe('GET /api/state/', () => {
  it('should return an object with the current gamestate', async () => {
    const res = await request(app).get('/api/state/')
    var gameState = game.getGameState()

    expect(res.status).toBe(200)

    expect(['X', 'O'].includes(gameState.currentPlayer)).toBe(true)
    expect(gameState.moves).toBeGreaterThanOrEqual(0)
    expect(gameState.moves).toBeLessThanOrEqual(9)
    expect(gameState.maxMoves).toBe(9)
    expect([true, false].includes(gameState.validMove)).toBe(true)
    expect(['X', 'O', 'T', null].includes(gameState.winner)).toBe(true)

    // Iterate through the grid and check each cell
    gameState.grid.map((row) => {
      row.map((cell) => {
        expect([null, 'X', 'O']).toContain(cell)
      })
    })
  })
})
