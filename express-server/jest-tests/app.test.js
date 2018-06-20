// const expect = require('chai').expect;
// const should = require('chai').should;
const request = require('supertest');
const app = require('../app');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4iLCJwYXNzd29yZCI6IjEyMyIsImV4cGlyYXRpb24iOjI1Mjk0Mjg4MTcwODUsImlhdCI6MTUyOTQyMjgxN30.7DtjAWnT0YK0kgY5JRmG9DzfjhN6Smc7Ic8LvsbVN5U';

describe('GET /', () => {

  it('should require authorization', () => {
    return request(app).get('/api').then((res) => {
      expect(res.statusCode).toBe(401);
    });
  });

  it('should respond with 200', () => {
    return request(app).get('/api/mountains', {
      headers: {
        authorisation: token
      }
    }).then((res) => {
      expect(res.statusCode).toBe(200);
    });
  });

});
