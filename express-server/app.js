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
    exp: 0,
  }
};

app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  });
});

app.get('/api/content',
  (req, res) => {
    console.log(Number(req.headers.expiration));
    (Number(req.headers.expiration) > Number(new Date())) ? res.status(200).send(mountains) : res.sendStatus(401);
    // (!req.headers.authentication === appUsers) ? res.sendStatus(401) : res.sendStatus(200);
  });

app.post('/api/login', (req, res) => {
  if (req.body) {
    const user = appUsers[req.body.email];
    if (user && user.password === req.body.password) {
      const userWithoutPassword = {...user};
      delete userWithoutPassword.password;
      const token = jwt.sign(userWithoutPassword, serverJWT_Secret);
      const expiration = Number(new Date()) + 30000;
      appUsers[req.body.email].exp = expiration;
      res.status(200).send({
        user: userWithoutPassword,
        token: token,
        exp: expiration
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

app.listen(3200, () => console.log('Server started on port 3200'));