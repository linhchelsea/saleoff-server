'use strict';

const Schema = use('Schema');

class AddColumnFollowUserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.bigInteger('follows').unsigned().default(0);
    });
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('follows');
    });
  }
}

module.exports = AddColumnFollowUserSchema;
