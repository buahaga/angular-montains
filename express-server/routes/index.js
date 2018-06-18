module.exports = (app) => {
  const authentication = require('./authentication');
  const mountains = require('./mountains');
  const comments = require('./comments');

  app.use('/api/login', authentication);
  app.use('/api/mountains', mountains);
  app.use('/api/comments', comments);

  return app;
}
