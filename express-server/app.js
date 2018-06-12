const express = require('express');
const app = express();
const routes = require('./routes');
const initializeDatabases = require('./dbs')

const cors = require('cors');
const bodyParser = require('body-parser');
const check = require('./utils/check-expiration');

app.use(cors());
app.use(bodyParser.json());
app.use(check.checkExpiration);

app.use('/api', routes);

initializeDatabases().then(dbs => {
  routes(app, dbs).listen(3200, () => console.log('Listening on port 3000'))
}).catch(err => {
  console.error('Failed to make database connection!')
  console.error(err)
  process.exit(1)
})
