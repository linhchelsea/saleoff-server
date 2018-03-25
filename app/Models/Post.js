'use strict';

const Model = use('Model');

class Post extends Model {
  user() {
    return this.belongsTo('App/Models/User');
  }

  product() {
    return this.belongsTo('App/Models/Product');
  }

  shop() {
    return this.belongsTo('App/Models/Shop');
  }
}

module.exports = Post;
