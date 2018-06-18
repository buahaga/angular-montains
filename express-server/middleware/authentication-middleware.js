const serverJWT_Secret = require('./jwt');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.originalUrl === '/api/login') {
    next();
  } else {
    jwt.verify(req.headers.authorization, serverJWT_Secret, (err, decoded) => {
      decoded.expiration > Date.now()
        ? next()
        : res.sendStatus(401);
    });
  };
}
