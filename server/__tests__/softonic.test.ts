const request = require('supertest')
const app = require('../server')

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })

  it('should respond with json', (done)=> {
    request(app)
    .get('/programs')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);

  })
})