const mockData = require('../mock-data');
const BaseDataAccessService = require('../models').BaseDataAccessService;

module.exports.MockDataRepository = class MockDataRepository {
  constructor(mockDataAccessService) {
    this.mockDataAccessService = mockDataAccessService;
  }
  get(query) {
    return this.mockDataAccessService.get(query);
  }
  add(entity) {
    return this.mockDataAccessService.add(entity);
  }
}

module.exports.MockDataAccessService = class MockDataAccessService extends BaseDataAccessService {
  get(query = {}) {
    return mockData
  }
  add(entity) {
    throw new Error('not implemented yet');
  }
}

module.exports.getAllMountains = (mockData, req) => {
  const query = req.query.params || {};
  const params = JSON.parse(query);
  const itemsPerPage = params.itemsPerPage || 10;
  const currentPage = params.currentPage || 1;
  let data = filterData(mockData, params).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return data;
};

module.exports.getMountainsCount = (mockData, req) => {
  const query = req.query.params || {};
  const params = JSON.parse(query);
  const itemsPerPage = params.itemsPerPage || 10;
  const data = Math.ceil(filterData(mockData, params).length / itemsPerPage).toString();
  return data;
};

module.exports.getChoosenMountain = (mockData, req) => {
  const id = Number(req.params.id);
  const mountain = mockData[id - 1];
  return mountain;
};

function filterData(mockData, params) {
  let data = mockData.slice();

  if (params.heigherThen) {
    data = data.filter((mountain) => mountain.height > params.heigherThen);
  }

  if (params.search) {
    data = filterBy(data, params.search);
  }

  if (params.minDifficulty) {
    data = data.filter((mountain) => mountain.difficulty >= params.minDifficulty);
  }

  if (params.maxDifficulty) {
    data = data.filter((mountain) => mountain.difficulty <= params.maxDifficulty)
  }

  if (params.byHeight) {
    data = sortBy(data, 'height', params.byHeight);
  }

  if (params.byName) {
    data = sortBy(data, 'mountain', params.byName);
  }

  return data;
}

function sortBy(array, key, direction) {
  const sortedArray = array.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    }
    if (b[key] > a[key]) {
      return -1;
    }
    return 0;
  });
  return direction === 'asc'
    ? sortedArray
    : sortedArray.reverse();
}

function filterBy(arr, searchValue) {
  return arr.filter((item) => (item.mountain.toLowerCase().startsWith(searchValue.toLowerCase())));
}
