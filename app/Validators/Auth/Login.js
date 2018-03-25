'use strict';

const Api = use('App/Validators/Api');

class Login extends Api {
  get rules () {
    return {
      id_token: 'required',
      device_token: 'required',
      platform: 'required|in:ios,android',
    };
  }

  get messages() {
    return {
      'id_token.required': 'id_token_is_required',
      'device_token.required': 'device_token_is_required',
      'platform.required': 'platform_is_required',
      'platform.in': 'platform_is_invalid',
    };
  }
}

module.exports = Login;

