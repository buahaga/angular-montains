module.exports = class MountainsRepository {
  constructor(mountainsAccessService) {
    this.mountainsAccessService = mountainsAccessService;
  }

  getAll(query) {
    return this.mountainsAccessService.getAll(query);
  }

  getCount(query) {
    return this.mountainsAccessService.getCount(query);
  }

  getById(id) {
    return this.mountainsAccessService.getById(id);
  }
}
