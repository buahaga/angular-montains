const serverJWT_Secret = 'kpTxN=)7mX3W3SEJ58Ubt8-';
const jwt = require('jsonwebtoken');
const appUsers = {
  'admin@gmail.com': {
    name: 'Admin',
    password: '123',
    expiration: 0,
  },
  'guest@gmail.com': {
    name: 'Guest',
    password: '123',
    expiration: 0,
  },
};

module.exports.postLogin = (req, res) => {
  const user = appUsers[req.body.email];
  if (user && user.password === req.body.password) {
    const token = jwt.sign(user, serverJWT_Secret);
    const expiration = Date.now() + 6000000;
    user.expiration = expiration;
    res.status(200).send({
      user: user.name,
      token: token,
      expiration: expiration
    });
  } else {
    res.status(403).send({
      errorMessage: 'Permission denied!'
    });
  }
};
