const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mountains = (require('./data'));

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

app.get('/api/mountains',
  (req, res) => {
    const params = JSON.parse(req.query.params);
    const paramsLength = Object.keys(params).length;
    const expiration = Number(req.headers.expiration);
    let data;
    if (paramsLength === 1) {
      data = searchData(params);
    } else if (paramsLength === 3) {
      data = sortData(params);
    } else {
      data = mountains.slice();
    }
    (expiration > Date.now()) ? res.status(200).send(data) : res.sendStatus(401);
  });

const searchData = (params) => {
  let data = mountains.slice();

  if (params.search) {
    data = searchMountain(data, params.search);
  }

  return data;

  function searchMountain(arr, key) {
    const data = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]['mountain'].toLowerCase().startsWith(key.toLowerCase())) {
        data.push(arr[i])
      }
    }
    return data;
  }

}

const sortData = (params) => {

  let data = mountains.slice();

  if (params.heigherThen) {
    data = data.filter((mountain) => mountain['height'] > params.heigherThen);
  }

  if (params.byHeight) {
    params.byHeight === 'smallest' ? data = sortByHeight() : data = sortByHeight().reverse()
  }

  if (params.byName) {
    params.byName === 'A' ? data = sortByName() : data = sortByName().reverse()
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

}

app.listen(3200, () => console.log('Server listening on port 3200'));

// api/places?country=Russia&peopleQty=2000000&sortBy=peopleQty:desc acs
