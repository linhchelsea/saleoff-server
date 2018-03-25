'use strict';

const UserRepository = use('App/Repositories/UserRepository');
const AuthRepository = use('App/Repositories/AuthRepository')
class AuthService {
  /**
   * constructor
   */
  constructor() {
    this.userRepo = new UserRepository();
    this.authRepo = new AuthRepository();
  }

  /**
   * Login
   * @param params
   * @returns Promise<Object>
   */
  async login(params, auth) {
    const user = await this.userRepo.verify(params.id_token);
    let userLogin = await this.userRepo.findUserByFirebaseUserId(user.user_id);
    if (!userLogin) {
      userLogin = await this.userRepo.createUser(user);
    }
    const jwt = await auth.generate(userLogin);
    await this.authRepo.createToken(userLogin.id, params, jwt);
    return jwt;
  }
}

module.exports = AuthService;
