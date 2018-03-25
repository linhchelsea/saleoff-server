'use strict';

const Schema = use('Schema');

class CreateUserFollowSchema extends Schema {
  up () {
    this.create('user_follows', (table) => {
      table.bigIncrements();
      table.bigInteger('user_one_id').unsigned().references('id').inTable('users');
      table.bigInteger('user_two_id').unsigned().references('id').inTable('users');
      table.unique([
        'user_one_id',
        'user_two_id',
      ]);
      table.timestamps();
    });
  }

  down () {
    this.drop('user_follows');
  }
}

module.exports = CreateUserFollowSchema;
