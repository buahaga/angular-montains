const express = require('express');
const router = express.Router();
const MountainsRepository = require('../repositories/mountains-repository');
const MountainsAccessService = require('../services/mountains-service');
const mountainsRepository = new MountainsRepository(new MountainsAccessService());

router.get('/', (req, res) => {
  const query = req.query.params;
  mountainsRepository.getAll(query)
    .then((mountains) => res.status(200).json(mountains))
    .catch((err) => res.send(err));
});

router.get('/count', (req, res) => {
  const query = req.query.params;
  mountainsRepository.getCount(query)
    .then((count) => res.status(200).json(count))
    .catch((err) => res.send(err));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  mountainsRepository.getById(id)
    .then((mountain) => res.status(200).json(mountain))
    .catch((err) => res.send(err));
});

module.exports = router;
