'use strict';

const Token = use('App/Models/Token');
class AuthRepository {
  /**
   * createToken
   * @param userId
   * @param params
   * @param jwt
   * @returns Promise<Object>
   */
  async createToken(userId, params, jwt) {
    const token = new Token();
    token.token = jwt.token;
    token.type = jwt.type;
    token.user_id = userId;
    token.device_token = params.device_token;
    token.platform = params.platform;
    await token.save();
    return token;
  }
}

module.exports = AuthRepository;

