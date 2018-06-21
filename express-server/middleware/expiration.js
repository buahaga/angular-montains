const jwt = require('jsonwebtoken');
const AuthenticationAccessService = require('../services/authentication-service');
const authenticationService = new AuthenticationAccessService();

module.exports = (req, res, next) => {
  if (req.originalUrl === '/api/auth/login' || req.originalUrl === '/api/auth/register') {
    next();
  } else {
    const isExpired = authenticationService.decode(req.headers.authorization).expiration;
    isExpired > Date.now() ? next() : res.sendStatus(401);
  };
}
