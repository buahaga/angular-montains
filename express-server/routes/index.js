module.exports = (app) => {
  const login = require('./login');
  const mountains = require('./mountains');
  const comments = require('./comments');

  app.use('/api/login', login);
  app.use('/api/mountains', mountains);
  app.use('/api/comments', comments);

  return app;
}
