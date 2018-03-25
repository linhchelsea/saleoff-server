'use strict';

const Controller = use('App/Controllers/Controller');
const AuthService = use('App/Services/AuthService');
const AuthenException = use('App/Exceptions/AuthenException');
class AuthController extends Controller{
  /**
   * constructor
   */
  constructor() {
    super();
    this.authService = new AuthService();
  }

  /**
   * login
   * @param request
   * @returns Promise<*>
   */
  async login({ request, auth }) {
    try {
      const params = request.only([
        'id_token',
        'device_token',
        'platform',
      ]);
      const jwt = await this.authService.login(params, auth);
      const data = {
        token: jwt.token,
      };
      return this.buildSuccess({ data });
    } catch (err) {
      throw new AuthenException();
    }
  }
}

module.exports = AuthController;
