const MongoClient = require('mongodb').MongoClient;
const URI = require('./config').url;

const connect = (url) => {
  return MongoClient.connect(url, {
    reconnectTries: 30,
    autoReconnect: true
  }).then(client => client.db())
};

module.exports = async () => {
  let dbs = await Promise.all([connect(URI)]);
  return {comments: dbs[0]}
};
