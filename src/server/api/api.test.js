const request = require('supertest')
const app = require('../../../app')

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
    // Create two dimensional array to hold our empty game board
    const column = expect.stringMatching('-')
    const row = [column, column, column]
    const expectedGrid = [row, row, row]
    const game = JSON.parse(res.text)
    // Mimic a newly created board
    expect(res.status).toBe(200)
    expect(game.maxMoves).toBe(9)
    expect(game.moves).toBe(0);
    expect(game.moves).toBeLessThanOrEqual(9)
    expect([true, false].includes(game.validMove)).toBe(true)
    // Expect that no moves have been made
    expect(['-'].includes(game.winner)).toBe(true)
    expect.arrayContaining(expectedGrid)
    // Expect X as current player since X always starts
    expect(['X'].includes(game.currentPlayer)).toBe(true)
  })
})
