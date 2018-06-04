const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mountains = require('./data');
const serverJWT_Secret = 'kpTxN=)7mX3W3SEJ58Ubt8-';
const appUsers = {
  'admin@gmail.com': {
    name: 'Admin',
    password: '123',
    expiration: 0,
  },
  'guest@gmail.com': {
    name: 'Guest',
    password: '123',
    expiration: 0,
  },
};

const checkExpiration = (req, res, next) => {
  if (req.method === 'GET') {
    const expiration = Number(req.headers.expiration);
    expiration > Date.now() ? next() : res.sendStatus(401);
  }
  next();
};

app.use(cors());
app.use(bodyParser.json());
app.use(checkExpiration);

app.post('/api/login', (req, res) => {
  const user = appUsers[req.body.email];
  if (user && user.password === req.body.password) {
    const token = jwt.sign(user, serverJWT_Secret);
    const expiration = Date.now() + 6000000;
    user.expiration = expiration;
    res.status(200).send({
      user: user.name,
      token: token,
      expiration: expiration
    });
  } else {
    res.status(403).send({
      errorMessage: 'Permission denied!'
    });
  }
});

app.get('/api/mountains',(req, res) => {
  const query = req.query.params || {};
  const params = JSON.parse(query);
  const itemsPerPage = params.itemsPerPage || 10;
  const currentPage = params.currentPage || 1;
  let data = filterData(mountains, params).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  res.status(200).send(data);
});

app.get('/api/count', (req, res) => {
  const query = req.query.params || {};
  const params = JSON.parse(query);
  const itemsPerPage = params.itemsPerPage || 10;
  const data = Math.ceil(filterData(mountains, params).length / itemsPerPage).toString();
  res.status(200).send(data);
});

app.get('/api/mountains/:id', (req, res) => {
  const id = Number(req.params.id);
  const mountain = mountains[id-1];
  res.status(200).send(mountain);
});

function filterData(mountains, params) {
  let data = mountains.slice();

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

app.listen(3200, () => console.log('Server listening on port 3200'));
