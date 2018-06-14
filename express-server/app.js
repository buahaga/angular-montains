const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = 3200;

const cors = require('cors');
const bodyParser = require('body-parser');
const authMiddleWare = require('./middleware/auth');

app.use(cors());
app.use(bodyParser.json());
app.use(authMiddleWare);

routes(app).listen(PORT, () => console.log(`Listening on port ${PORT}`))
