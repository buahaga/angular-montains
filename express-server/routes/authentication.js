const express = require('express');
const router = express.Router();
const AuthenticationRepository = require('../repositories/authentication-repository');
const AuthenticationAccessService = require('../services/authentication-service');
const authenticationRepository = new AuthenticationRepository(new AuthenticationAccessService());

router.post('/', (req, res) => {
  const credentials = req.body;
  authenticationRepository.check(credentials)
    .then((token) => res.status(200).json(token))
    .catch((err) => res.send(err));
});

module.exports = router;
