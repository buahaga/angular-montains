const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mountains = (require('./data'));
const serverJWT_Secret = 'kpTxN=)7mX3W3SEJ58Ubt8-';
const appUsers = {
  'admin@gmail.com': {
    name: 'Herr Major',
    password: '123',
    expiration: 0,
  }
};
const checkExpiration = (req, res, next) => {
  if (req.method === 'GET') {
    const expiration = Number(req.headers.expiration);
    expiration > Date.now() ? next() : res.sendStatus(401);
  } else next();
};

app.use(cors());
app.use(bodyParser.json());
app.use(checkExpiration);

app.post('/api/login', (req, res) => {
  const user = appUsers[req.body.email];
  if (user && user.password === req.body.password) {
    const userWithPassword = {...user};
    delete userWithPassword.password;
    const token = jwt.sign(userWithPassword, serverJWT_Secret);
    const expiration = Date.now() + 3000000;
    appUsers[req.body.email].expiration = expiration;
    res.status(200).send({
      user: userWithPassword.name,
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
  const params = req.query.params;
  params ? data = sortData(JSON.parse(params)) : data = mountains.slice();
  res.status(200).send(data);
});

const sortData = (params) => {

  let data = mountains.slice();

  if (params.heigherThen) {
    data = data.filter((mountain) => mountain.height > params.heigherThen);
  }

  if (params.search) {
    data = findMountain(data, params.search);
  }

  if (params.byHeight) {
    params.byHeight === 'asc' ? data = sortByHeight() : data = sortByHeight().reverse();
  }

  if (params.byName) {
    params.byName === 'asc' ? data = sortByName() : data = sortByName().reverse();
  }

  return data;

  function sortByName() {
    let sortedByName = data.sort((a, b) => {
      return (a.mountain > b.mountain) ? 1 :
        (b.mountain > a.mountain) ? -1 : 0;
    })
    return sortedByName;
  }

  function sortByHeight() {
    let sortedByHeight = data.sort((a, b) => {
      return a.height - b.height;
    })
    return sortedByHeight;
  }

  function findMountain(arr, key) {
    const data = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].mountain.toLowerCase().startsWith(key.toLowerCase())) {
        data.push(arr[i]);
      }
    }
    return data;
  }

}

app.listen(3200, () => console.log('Server listening on port 3200'));
