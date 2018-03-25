'use strict';

const Schema = use('Schema');

class CreateEmployeeSchema extends Schema {
  up () {
    this.create('shop_users', (table) => {
      table.bigIncrements();
      table.bigInteger('user_id').unsigned().references('id').inTable('users');
      table.bigInteger('shop_id').unsigned().references('id').inTable('shops');
      table.unique(['user_id', 'shop_id']);
      table.timestamps();
    });
  }

  down () {
    this.drop('shop_users');
  }
}

module.exports = CreateEmployeeSchema;
