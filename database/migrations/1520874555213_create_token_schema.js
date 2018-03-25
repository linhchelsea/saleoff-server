'use strict';

const Schema = use('Schema');

class CreateTokenSchema extends Schema {
  up () {
    this.create('tokens', (table) => {
      table.bigIncrements();
      table.bigInteger('user_id').unsigned().references('id').inTable('users');
      table.string('type');
      table.text('token');
      table.string('device_token');
      table.string('platform');
      table.timestamps();
    });
  }

  down () {
    this.drop('tokens');
  }
}

module.exports = CreateTokenSchema;
