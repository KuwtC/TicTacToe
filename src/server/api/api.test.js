const request = require('supertest')
const app = require('../../../app')

describe('GET /api/update/:cell', () => {
  it('should return an object with a updated game (new move has been made)', async () => {
    const cell = '0,0'
    const res = await request(app).get(`/api/update/${cell}`)
    // Create two dimensional array to hold our game board
    const column = expect.stringMatching(/[XO-]/)
    const row = [column, column, column]
    const expectedGrid = [row, row, row]
    const game = JSON.parse(res.text)
    // Mimic a game in session
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
