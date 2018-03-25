'use strict';

const Schema = use('Schema');

class CreateShopFollowSchema extends Schema {
  up () {
    this.create('shop_follows', (table) => {
      table.bigIncrements();
      table.bigInteger('user_id').unsigned().references('id').inTable('users');
      table.bigInteger('shop_id').unsigned().references('id').inTable('shops');
      table.unique(['user_id', 'shop_id']);
      table.timestamps();
    });
  }

  down () {
    this.drop('shop_follows');
  }
}

module.exports = CreateShopFollowSchema;
