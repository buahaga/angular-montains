const express = require('express');
const authentication = require('./authentication');
const mountains = require('./mountains');
const comments = require('./comments');
const router = express.Router();

router.use('/api/auth', authentication);
router.use('/api/mountains', mountains);
router.use('/api/comments', comments);

module.exports = router;
