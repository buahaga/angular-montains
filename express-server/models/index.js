module.exports.BaseDataAccessService = class BaseDataAccessService {
  get(query) {
    throw new Error('method get should be overwritten');
  }
  add(entity) {
    throw new Error('method add should be overwritten');
  }
}
