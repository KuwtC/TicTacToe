const request = require('supertest')
const api = require('./api')

describe('GET / endpoint', () => {
  it('should return a 200 OK status code', async () => {
    const res = await request(api).get('/helloworld')
    expect(res.status).toBe(200)
  })
  it('should return the greeting in a object', async () => {
    const res = await request(api).get('/helloworld')
    expect(res.body.hello).toBe('world')
  })
})
