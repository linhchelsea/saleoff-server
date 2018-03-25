'use strict';

const Schema = use('Schema');

class AddFollowColumnSchema extends Schema {
  up () {
    this.table('shops', (table) => {
      table.bigInteger('follows').unsigned().default(0);
    });
  }

  down () {
    this.table('shops', (table) => {
      table.dropColumn('follows');
    });
  }
}

module.exports = AddFollowColumnSchema;
