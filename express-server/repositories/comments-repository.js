module.exports = class CommentsRepository {
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
