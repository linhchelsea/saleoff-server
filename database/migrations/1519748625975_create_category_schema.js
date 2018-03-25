'use strict';

const Schema = use('Schema');

class CreateCategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.bigIncrements();
      table.string('name');
      table.timestamps();
    });
  }

  down () {
    this.drop('categories');
  }
}

module.exports = CreateCategorySchema;
