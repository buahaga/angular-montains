module.exports = (req, res, next) => {
  if (req.originalUrl === '/api/login') {
    next();
  } else {
    req.headers.expiration > Date.now() ? next() : res.sendStatus(401);
  }
};
