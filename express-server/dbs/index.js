const MongoClient = require('mongodb').MongoClient;
const URI = require('./config').url;
let _client;

module.exports = (url = URI) => {
  if (_client) {
    return Promise.resolve(_client);
  }
  return MongoClient.connect(url, {
    reconnectTries: 30,
    autoReconnect: true
  }).then((client) => {
    return _client = client.db();
  });
}
