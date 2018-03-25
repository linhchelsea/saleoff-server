'use strict';

const Model = use('Model');

class ShopFollow extends Model {
  static get table () {
    return 'shop_follows';
  }
}

module.exports = ShopFollow;
