const express = require('express');
const router = express.Router();
const AuthenticationAccessService = require('../services/authentication-service');
const authenticationService = new AuthenticationAccessService('credentials');

router.post('/login', (req, res) => {
  const credentials = req.body;
  authenticationService.check(credentials)
    .then((token) => res.status(200).json(token))
    .catch((err) => res.send(err));
});

router.post('/register', (req, res) => {
  const credentials = req.body;
  authenticationService.register(credentials)
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(418).send(err)
    });
});

module.exports = router;
