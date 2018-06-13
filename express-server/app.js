const express = require('express');
const app = express();
const PORT = 3200;

const initializeDatabases = require('./dbs');
const routes = require('./routes');

const cors = require('cors');
const bodyParser = require('body-parser');
const checkExpiration = require('./utils/check-expiration').checkExpiration;

app.use(cors());
app.use(bodyParser.json());
app.use(checkExpiration);

initializeDatabases().then(dbs => {
  routes(app, dbs).listen(PORT, () => console.log(`Listening on port ${PORT}`))
}).catch(err => {
  console.error('Failed to make database connection!')
  console.error(err)
  process.exit(1)
})
