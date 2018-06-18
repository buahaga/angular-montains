const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = 2400;

const cors = require('cors');
const bodyParser = require('body-parser');
const authMiddleWare = require('./middleware/authentication-middleware');

app.use(cors());
app.use(bodyParser.json());
app.use(authMiddleWare);

routes(app).listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
