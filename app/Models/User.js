'use strict';

const Model = use('Model');

class User extends Model {
  static boot () {
    super.boot();
  }
  tokens () {
    return this.hasMany('App/Models/Token');
  }

  shops () {
    return this.hasMany('App/Models/Shop')
      .pivotTable('shop_users');
  }
}

module.exports = User;
