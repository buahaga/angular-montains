const jwt = require('jsonwebtoken');
const AuthenticationAccessService = require('../services/authentication-service');
const authenticationService = new AuthenticationAccessService();
const authPathOnly = (url) => url.startsWith('/api/auth');

module.exports = (req, res, next) => {
  if (authPathOnly(req.originalUrl)) {
    next();
  } else {
    const clientToken = authenticationService.decode(req.headers.authorization);
    const expiration = (clientToken) ? clientToken.expiration : null;
    expiration > Date.now() ? next() : res.sendStatus(401);
  };
}
