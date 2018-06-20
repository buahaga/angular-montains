const serverJWT_Secret = require('../middleware/jwt');
const jwt = require('jsonwebtoken');
const appUsers = {
  'admin@gmail.com': {
    name: 'Admin',
    password: '123',
    expiration: 0
  },
  'guest@gmail.com': {
    name: 'Guest',
    password: '123',
    expiration: 0
  }
};

module.exports = class AuthenticationAccessService {
  check(credentials) {
    const user = appUsers[credentials.email];
    user.expiration = Date.now() + 6000000;
    if (user.password === credentials.password) {
      const token = jwt.sign(user, serverJWT_Secret);
      return Promise.resolve({ user: user.name, token: token });
    }
  }
}
