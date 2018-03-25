'use strict';

const Model = use('Model');

class Shop extends Model {
  static boot () {
    super.boot();
  }

  category() {
    return this.belongsTo('App/Models/ShopCategory', 'shops.shop_cat_id', 'shop_categories.id');
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  users () {
    return this.belongsToMany('App/Models/User')
      .pivotTable('shop_users');
  }
}

module.exports = Shop;
