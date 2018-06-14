const express = require('express');
const router = express.Router();
const CommentsRepository = require('../utils/comments').CommentsRepository;
const MongoDbDataAccessService = require('../utils/comments').MongoDbDataAccessService;
const commentsRepository = new CommentsRepository(new MongoDbDataAccessService('comments'));

router.post('/', (req, res) => {
  const comment = {
    mountain: req.body.mountain,
    user: req.body.user,
    comment: req.body.comment
  };
  commentsRepository.add(comment)
    .then((comment) => res.status(200).json(comment))
    .catch((err) => res.send(err));
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  commentsRepository.get({mountain: id})
    .then((comments) => res.status(200).json(comments))
    .catch((err) => res.send(err));
});

module.exports = router;
