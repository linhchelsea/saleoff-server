'use strict';

const Schema = use('Schema')

class CreateUserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.bigIncrements();
      table.string('user_id');
      table.string('email', 254).notNullable().unique();
      table.string('username', 254).notNullable().unique();
      table.string('full_name');
      table.text('address').default(null);
      table.string('avatar');
      table.boolean('gender').default(0);
      table.date('birthday').default(null);
      table.string('phone', 20).default(null);
      table.boolean('is_notify').default(1);
      table.timestamps();
    });
  }

  down () {
    this.drop('users');
  }
}

module.exports = CreateUserSchema
