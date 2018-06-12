const express = require('express');
const app = express();
const routes = require('./routes');

const cors = require('cors');
const bodyParser = require('body-parser');
const check = require('./utils/check-expiration');

app.use(cors());
app.use(bodyParser.json());
app.use(check.checkExpiration);

app.use('/api', routes);

app.listen(3500, () => console.log('Server listening on port 3500'));
