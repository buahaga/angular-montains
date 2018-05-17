const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const expressJwt = require('express-jwt');
// const route = express.Router();

const serverJWT_Secret = 'kpTxN=)7mX3W3SEJ58Ubt8-';
const appUsers = {
  'admin@gmail.com': {
    name: 'Admin',
    password: '123',
    token: ''
  },
  'guest@mail.com': {
    name: 'Guest',
    password: '12345',
    token: ''
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
  expressJwt({secret: serverJWT_Secret}),
  (req, res) => {
    console.log(req.headers.authorization);
    (!req.headers.authentication === appUsers) ? res.sendStatus(401) : res.sendStatus(200);
  });

app.post('/api/login', (req, res) => {
  if (req.body) {
    const user = appUsers[req.body.email];
    if (user && user.password === req.body.password) {
      const userWithoutPassword = {...user};
      delete userWithoutPassword.password;
      const token = jwt.sign(userWithoutPassword, serverJWT_Secret);
      appUsers[req.body.email].token = token;
      console.log(appUsers['']);
      res.status(200).send({
        user: userWithoutPassword,
        token: token
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
