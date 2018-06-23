const express = require('express');
const MountainsRepository = require('../repositories/mountains-repository');
const FakeMountainsAccessService = require('../services/mountains-service');
const router = express.Router();
const mountainsRepository = new MountainsRepository(new FakeMountainsAccessService());

router.get('/', (req, res) => {
  const query = req.query.params;
  mountainsRepository.getAll(query)
    .then((mountains) => res.status(200).json(mountains))
    .catch((err) => res.status(404).send(err));
});

router.get('/count', (req, res) => {
  const query = req.query.params;
  mountainsRepository.getCount(query)
    .then((count) => res.status(200).json(count))
    .catch((err) => res.status(404).send(err));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  mountainsRepository.getById(id)
    .then((mountain) => res.status(200).json(mountain))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
