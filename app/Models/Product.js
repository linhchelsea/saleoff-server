'use strict';

const Model = use('Model');

class Product extends Model {
  category() {
    return this.belongsTo('App/Models/Category');
  }
}

module.exports = Product;
