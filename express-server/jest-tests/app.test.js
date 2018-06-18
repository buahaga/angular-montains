const request = require('supertest');
const expect = require('chai').expect;
const should = require('chai').should;
const app = require('../app');

describe('GET /', () => {
  it('should return 401 Unauthorized', () => {
    return request(app)
      .get('/')
      .expect(401)
      .then(res => {
        console.log(res.text);
        expect(res.text).to.equal('Unauthorized');
      });
  });
});
