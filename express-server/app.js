const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mountains = (require('./data')).slice(0, 50);

const serverJWT_Secret = 'kpTxN=)7mX3W3SEJ58Ubt8-';

const appUsers = {
  'admin@gmail.com': {
    name: 'Admin',
    password: '123',
    expiration: 0,
  }
};

app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  if (req.body) {
    const user = appUsers[req.body.email];
    if (user && user.password === req.body.password) {
      const userWithPassword = {...user};
      delete userWithPassword.password;
      const token = jwt.sign(userWithPassword, serverJWT_Secret);
      const expiration = Number(new Date()) + 3000000;
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
  } else {
    res.status(403).send({
      errorMessage: 'Please provide email and password'
    });
  }
});

app.get('/api/content',
  (req, res) => {
    const sort = JSON.parse(req.query.sort);
    const bool = Boolean(Object.keys(sort).length);
    let data;
    bool ? data = sortData(sort) : data = mountains.slice();
    (Number(req.headers.expiration) > Number(new Date())) ? res.status(200).send(data) : res.sendStatus(401);
  });

const sortData = (sort) => {

  let data = mountains.slice();

  if (sort.heigherThen) {
    data = data.filter((mountain) => {
      return mountain['height'] > sort.heigherThen;
    })
  }

  if (sort.byName) {
    sort.byName === 'A' ? data = sortByName() : data = sortByName().reverse()
    return data;
  }

  if (sort.byHeight) {
    sort.byHeight === 'smallest' ? data = sortByHeight() : data = sortByHeight().reverse()
    return data;
  }

  if (sort.search) {
    return data = [searchMountain(data, sort.search)];
  }

  return data;

  function sortByName() {
    let sortedByName = data.sort((a, b) => {
      return (a["mountain"] > b["mountain"]) ? 1 : ((b["mountain"] > a["mountain"]) ? -1 : 0)
    })
    return sortedByName;
  }

  function sortByHeight() {
    let sortedByHeight = data.sort((a, b) => {
      return a['height'] - b['height'];
    })
    return sortedByHeight;
  }

  function searchMountain(arr, key) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]['mountain'] === key) {
        return arr[i];
      }
    }
  }

}

app.listen(3200, () => console.log('Server started on port 3200'));
