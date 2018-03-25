'use strict';

const Schema = use('Schema');

class CreateRoleSchema extends Schema {
  up () {
    this.create('roles', (table) => {
      table.bigIncrements();
      table.string('name');
      table.timestamps();
    });
  }

  down () {
    this.drop('roles');
  }
}

module.exports = CreateRoleSchema;
