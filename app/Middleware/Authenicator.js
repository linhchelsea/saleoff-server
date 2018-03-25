'use strict';

const UserRepository = use('App/Repositories/UserRepository');
const AuthenException = use('App/Exceptions/AuthenException');

class Authenicator {
  constructor() {
    this.userRepo = new UserRepository();
  }

  async handle({ auth }, next) {
    try {
      await auth.getUser();
      await next();
    } catch (err) {
      console.log(err);
      throw new AuthenException();
    }
  }
}

module.exports = Authenicator;
