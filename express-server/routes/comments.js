const express = require('express');
const comments = express.Router();
const commentsArray = [];

comments.post('/', (req, res) => {
  if (req.body) {
    const newComment = {
      comment: req.body.comment
    }
    commentsArray.push(newComment.comment);
    res.status(200).send(commentsArray);
  } else {
    res.status(403).send({
      errorMessage: 'Smth went wrong!'
    });
  }
});

module.exports = comments;
