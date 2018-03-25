'use strict';

const Model = use('Model');

class ShopUser extends Model {
  static get table () {
    return 'shop_users';
  }


}

module.exports = ShopUser;
