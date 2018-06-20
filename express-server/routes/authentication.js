const express = require('express');
const router = express.Router();
const AuthenticationAccessService = require('../services/authentication-service');
const authenticationService = new AuthenticationAccessService();

router.post('/login', (req, res) => {
  const credentials = req.body;
  authenticationService.check(credentials)
    .then((token) => res.status(200).json(token))
    .catch((err) => res.send(err));
});

router.post('/register', (req, res) => {
  res.status(200).json('registered successfully');
});

module.exports = router;
