'use strict';

const Schema = use('Schema');

class CreateShopCategorySchema extends Schema {
  up () {
    this.create('shop_categories', (table) => {
      table.bigIncrements();
      table.string('name');
      table.timestamps();
    });
  }

  down () {
    this.drop('shop_categories');
  }
}

module.exports = CreateShopCategorySchema;
