const request = require('supertest')
const app = require('../../../app')
const TicTacToe = require('../logic/tictactoe')
const game = new TicTacToe()

describe('GET /api/update/:cell', () => {
  it('should return an object with a updated game (new move has been made)', async () => {
    const cell = '0,0'
    const res = await request(app).get(`/api/update/${cell}`)
    expect(res.status).toBe(200)

    const gameState = JSON.parse(res.text)
    // Mimic a gameState in session
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

describe('GET /api/reset/', () => {
  it('should return an object with a new game (board has been reset)', async () => {
    const res = await request(app).get('/api/reset/')
    var gameState = game.getGameState()
    expect(res.status).toBe(200)
    expect(gameState.currentPlayer).toBe('X')
    expect.arrayContaining(gameState.grid)
    expect(gameState.moves).toBe(0)
    expect(gameState.maxMoves).toBe(9)
    expect(gameState.winner).toBeNull()
    expect([true, false].includes(gameState.validMove)).toBe(true)
  })
})
