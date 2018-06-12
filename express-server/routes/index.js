const routes = require('express').Router();
const mountains = require('./mountains');
const login = require('./login');
const comments = require('./comments');

routes.use('/mountains', mountains);
routes.use('/login', login);
routes.use('/comments', comments);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
