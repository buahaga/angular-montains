const mountains = require('../utils/mountains');
const login = require('../utils/login');

module.exports = (app, dbs) => {

  app.post('/api/login', login.postLogin);

  app.get('/api/mountains', mountains.getAllMountains);
  app.get('/api/mountains/count', mountains.getMountainsCount);
  app.get('/api/mountains/:id', mountains.getChoosenMountain);

  app.post('/api/comments', (req, res) => {
    const comment = {
      mountain: req.body.mountain,
      user: req.body.user,
      comment: req.body.comment
    };
    dbs.comments.collection('comments').insertOne(comment, (err, result) => {
      err ? res.error(err) : res.status(200);
    });
  });

  app.get('/api/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    dbs.comments.collection('comments').find({mountain: id}).toArray((err, comments) => {
      err ? res.error(err) : res.json(comments);
    })
  });

  return app
}
