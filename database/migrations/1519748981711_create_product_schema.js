'use strict';

const Schema = use('Schema');

class CreateProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.bigIncrements();
      table.string('name');
      table.text('description');
      table.string('image');
      table.string('is_active');
      table.bigInteger('category_id').unsigned().references('id').inTable('categories');
      table.timestamps();
    });
  }

  down () {
    this.drop('products');
  }
}

module.exports = CreateProductSchema;
