const mockData = require('../data');

module.exports.getAllMountains = (req, res) => {
  const query = req.query.params || {};
  const params = JSON.parse(query);
  const itemsPerPage = params.itemsPerPage || 10;
  const currentPage = params.currentPage || 1;
  let data = filterData(mockData, params).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  res.status(200).send(data);
};

module.exports.getMountainsCount = (req, res) => {
  const query = req.query.params || {};
  const params = JSON.parse(query);
  const itemsPerPage = params.itemsPerPage || 10;
  const data = Math.ceil(filterData(mockData, params).length / itemsPerPage).toString();
  res.status(200).send(data);
};

module.exports.getChoosenMountain = (req, res) => {
  const id = Number(req.params.id);
  const mountain = mockData[id-1];
  res.status(200).send(mountain);
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
  return direction === 'asc' ? sortedArray : sortedArray.reverse();
}

function filterBy(arr, searchValue) {
  return arr.filter((item) => (
    item.mountain.toLowerCase().startsWith(searchValue.toLowerCase())
  ));
}
