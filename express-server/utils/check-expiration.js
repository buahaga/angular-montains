module.exports.checkExpiration = (req, res, next) => {
  if (req.method === 'GET') {
    const expiration = Number(req.headers.expiration);
    expiration > Date.now() ? next() : res.sendStatus(401);
  }
  next();
};
