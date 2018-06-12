const express = require('express');
const mountains = express.Router();
const mountainsUtils = require('../utils/mountains');

mountains.get('/', mountainsUtils.getAllMountains);

mountains.get('/count', mountainsUtils.getMountainsCount);

mountains.get('/:id', mountainsUtils.getChoosenMountain);

module.exports = mountains;
