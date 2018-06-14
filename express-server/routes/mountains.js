const express = require('express');
const router = express.Router();
const MockDataRepository = require('../utils/mountains').MockDataRepository;
const MockDataAccessService = require('../utils/mountains').MockDataAccessService;
const getAllMountains = require('../utils/mountains').getAllMountains;
const getMountainsCount = require('../utils/mountains').getMountainsCount;
const getChoosenMountain = require('../utils/mountains').getChoosenMountain;
const mockDataRepository = new MockDataRepository(new MockDataAccessService());

router.get('/', (req, res) => {
  const mockData = mockDataRepository.get()
  res.status(200).json(getAllMountains(mockData, req))
});

router.get('/count', (req, res) => {
  const mockData = mockDataRepository.get()
  res.status(200).json(getMountainsCount(mockData, req))
});

router.get('/:id', (req, res) => {
  const mockData = mockDataRepository.get()
  res.status(200).json(getChoosenMountain(mockData, req))
});

module.exports = router;
