const mongo = require('mongodb').MongoClient;
const URL = require('../dbs/config').url;

module.exports.postComments = (req, res) => {
  const comment = {
    mountain: req.body.mountain,
    user: req.body.user,
    comment: req.body.comment
  };
  mongo.connect(URL, (err, client) => {
    const db = client.db('angular-mountains');
    db.collection('comments').insertOne(comment, (err, result) => {
      client.close();
    });
  });
};

module.exports.getComments = (req, res) => {
  const id = Number(req.params.id);
  mongo.connect(URL, (err, client) => {
    const db = client.db('angular-mountains');
    const commentsCollection = db.collection('comments').find({mountain: id})
    .toArray((err, comments) => {
      if (err)
      throw err;
      client.close();
      res.status(200).json(comments);
    });
  });
};
