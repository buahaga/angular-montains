const express = require('express');
const router = express.Router();
const login = require('../utils/login');

router.post('/', login.postLogin);

module.exports = router;
