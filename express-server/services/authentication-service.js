const connect = require('../dbs');
const jwt = require('jsonwebtoken');
const _JWTSECRET = 'kpTxN=)7mX3W3SEJ58Ubt8-';

module.exports = class AuthenticationAccessService {

  constructor(config) {
    this.collection = config;
  }

  check(credentials) {
    const userToFind = {
      email: credentials.email,
      password: jwt.sign(credentials.password, _JWTSECRET)
    }
    return new Promise((resolve, reject) => {
      connect().then((client) => {
        client.collection(this.collection).findOne(userToFind, (err, result) => {
          if (err) {
            reject(err)
          } else {
            const token = (result) ? {
                user: userToFind.email,
                token: jwt.sign({ ...userToFind, expiration: Date.now() + 6000000 }, _JWTSECRET)
              } : null
            resolve(token);
          }
        });
      }).catch((err) => reject(err));
    });
  }

  register(credentials) {
    const newUser = {
      email: credentials.email,
      password: jwt.sign(credentials.password, _JWTSECRET)
    }
    return new Promise((resolve, reject) => {
      connect().then((client) => {
        client.collection(this.collection).insertOne({ _id: newUser.email, ...newUser }, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }).catch((err) => reject(err));
    });
  }

  decode(data) {
    return jwt.decode(data, _JWTSECRET);
  }
}
