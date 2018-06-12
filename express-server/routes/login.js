const express = require('express');
const login = express.Router();
const loginUtils = require('../utils/login');

login.post('/', loginUtils.postLogin);

module.exports = login;
