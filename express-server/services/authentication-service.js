const jwt = require('jsonwebtoken');
const connect = require('../dbs');
const _JWTSECRET = 'kpTxN=)7mX3W3SEJ58Ubt8-';
const _EXPIRATION_TIME = Date.now() + 6000000;

module.exports = class AuthenticationAccessService {

  constructor(collectionName) {
    this.collection = collectionName;
  }

  check({ email, password }) {
    const user = {
      email,
      password: jwt.sign(password, _JWTSECRET),
    };

    return new Promise((resolve, reject) => {
      connect().then((client) => {
        client.collection(this.collection).findOne(user, (err, result) => {
          if (err) {
            reject(err);
          } else if (result) {
            resolve({
              user: user.email,
              token: jwt.sign({ ...user, expiration: _EXPIRATION_TIME }, _JWTSECRET),
            });
          } else {
            throw new Error(`The user ${email} doesn't exist`);
          }
        });
      }).catch((err) => reject(err));
    });
  }

  register(credentials) {
    const user = {
      email: credentials.email,
      password: jwt.sign(credentials.password, _JWTSECRET)
    };

    return new Promise((resolve, reject) => {
      connect().then((client) => {
        client.collection(this.collection).insertOne({ _id: user.email, ...user }, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }).catch((err) => reject(err));
    });
  }

  decode(token) {
    return jwt.decode(token, _JWTSECRET);
  }
}
