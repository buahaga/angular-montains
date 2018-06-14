const connect = require('../dbs');
const BaseDataAccessService = require('../models').BaseDataAccessService;

module.exports.CommentsRepository = class CommentsRepository {
  constructor(dataAccessService) {
    this.dataAccessService = dataAccessService;
  }
  get(query) {
    return this.dataAccessService.get(query);
  }
  add(comment) {
    return this.dataAccessService.add(comment);
  }
}

module.exports.MongoDbDataAccessService = class MongoDbDataAccessService extends BaseDataAccessService {
  constructor(config) {
    super();
    this.collection = config;
  }
  get(query) {
    return new Promise((resolve, reject) => {
      connect().then((client) => {
        client.collection(this.collection).find(query).toArray((err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }).catch((err) => reject(err));
    });
  }
  add(entity) {
    return new Promise((resolve, reject) => {
      connect().then((client) => {
        client.collection(this.collection).insertOne(entity, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }).catch((err) => reject(err));
    });
  }
}
