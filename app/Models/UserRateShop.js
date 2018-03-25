'use strict';

const Model = use('Model');

class UserRateShop extends Model {
  static get table () {
    return 'user_rate_shop';
  }
}

module.exports = UserRateShop;
