const request = require('supertest');
const app = require('../app');
const userCredentials = {
  email: 'admin@gmail.com',
  password: '123'
};

describe('GET /', () => {

  it('should require authentication', () => {
    request(app).get('/').then((res) => {
      expect(res.statusCode).toBe(401);
    });
  });

  it('should return 418 if register whit already existing credentials', async () => {
    await request(app).post('/api/auth/register').send(userCredentials).then((res) => {
      expect(res.statusCode).toBe(418);
    });
  });

  it('should return 200 on valid credentials', async () => {
    await request(app).post('/api/auth/login').send(userCredentials).then((res) => {
      expect(res.statusCode).toBe(200);
    });
  });

  it('should respond with 200 after authentication', () => {
    request(app).get('/').then((res) => {
      expect(res.statusCode).toBe(200);
    });
  });

});
