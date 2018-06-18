module.exports = class AuthenticationRepository {
  constructor(dataAccessService) {
    this.dataAccessService = dataAccessService;
  }

  check(credentials) {
    return this.dataAccessService.check(credentials);
  }
}
