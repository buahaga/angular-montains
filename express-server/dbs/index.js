const config = require('../config/db');
const MongoClient = require('mongodb').MongoClient
const URI = config.url;

function connect(url) {
  return MongoClient.connect(url).then(client => client.db())
}

module.exports = async function() {
  let databases = await Promise(connect(URI));
}
