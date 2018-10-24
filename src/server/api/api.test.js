const request = require('supertest')
const app = require('../../../app')

describe('GET /api/update/:cell', () => {
  it('should return an object with an updated game (new move has been made)', async () => {
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
