const express = require('express');
const comments = express.Router();
const commentsUtils = require('../utils/comments');

comments.post('/', commentsUtils.postComments);
comments.get('/:id', commentsUtils.getComments);

module.exports = comments;
