'use strict';

const Schema = use('Schema');

class CreateShopSchema extends Schema {
  up () {
    this.create('shops', (table) => {
      table.bigIncrements();
      table.bigInteger('owner_id').unsigned().references('id').inTable('users');
      table.bigInteger('shop_cat_id').unsigned().references('id').inTable('shop_categories');
      table.string('name');
      table.string('phone', 20);
      table.string('address');
      table.string('avatar').default(null);
      table.string('cover').default(null);
      table.string('web ').default(null);
      table.text('description');
      table.boolean('is_active').default(0);
      table.float('rate').default(0);
      table.bigInteger('total_rate').default(0);
      table.timestamps();
    });
  }

  down () {
    this.drop('shops');
  }
}

module.exports = CreateShopSchema;
