const mockData = require('../mock-data');

module.exports = class FakeMountainsAccessService {
  getAll(query = {}) {
    const params = JSON.parse(query);
    const itemsPerPage = params.itemsPerPage || 10;
    const currentPage = params.currentPage || 1;
    let mountains = filterData(mockData, params).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return Promise.resolve(mountains);
  }

  getCount(query = {}) {
    const params = JSON.parse(query);
    const count = filterData(mockData, params).length;
    return Promise.resolve(count);
  }

  getById(id) {
    const mountain = mockData[id - 1];
    return Promise.resolve(mountain);
  }
}

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
