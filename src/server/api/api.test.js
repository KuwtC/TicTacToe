const request = require('supertest')
const app = require('../../../app')

describe('GET /api/update/:cell', () => {
  it('should return an object with an updated game (new move has been made)', async () => {
    // Create two dimensional array to hold our game board
    const cell = '0,0'
    const column = expect.stringMatching(/[XO-]/)
    const row = [column, column, column]
    const expectedGrid = [row, row, row]
    const res = await request(app).get(`/api/update/${cell}`)
    const game = JSON.parse(res.text)
    expect(res.status).toBe(200)
    expect(game.maxMoves).toBe(9)
    expect(game.moves).toBeGreaterThanOrEqual(0)
    expect(game.moves).toBeLessThanOrEqual(9)
    expect([true, false].includes(game.validMove)).toBe(true)
    expect(['X', 'O', 'T', '-'].includes(game.winner)).toBe(true)
    expect.arrayContaining(expectedGrid)
    expect(['X', 'O'].includes(game.currentPlayer)).toBe(true)
  })
})
