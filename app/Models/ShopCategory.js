'use strict';

const Model = use('Model');

class ShopCategory extends Model {
  shops () {
    return this.hasMany('App/Models/Shop', 'shop_categories.id', 'shops.shop_cat_id');
  }
}

module.exports = ShopCategory;
