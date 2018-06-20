const serverJWT_Secret = require('./jwt');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.originalUrl === '/api/auth/login' || req.originalUrl === '/api/auth/register') {
    next();
  } else {
    jwt.verify(req.headers.authorization, serverJWT_Secret, (err, decoded) => {
      decoded.expiration > Date.now()
        ? next()
        : res.sendStatus(401);
    });
  };
}

// TODO short it and import jwt from auth.service
