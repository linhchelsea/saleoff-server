'use strict';

const Schema = use('Schema');

class CreateAdminSchema extends Schema {
  up () {
    this.create('admins', (table) => {
      table.bigIncrements();
      table.string('username', 32).unique();
      table.string('password');
      table.string('full_name');
      table.bigInteger('role_id').unsigned().references('id').inTable('roles');
      table.timestamps();
    });
  }

  down () {
    this.drop('admins');
  }
}

module.exports = CreateAdminSchema;
