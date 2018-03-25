'use strict';

const Schema = use('Schema');

class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.bigIncrements();
      table.bigInteger('post_id').unsigned().references('id').inTable('posts');
      table.bigInteger('user_id').unsigned().references('id').inTable('users');
      table.enum('type', ['user', 'shop']);
      table.text('comment');
      table.timestamps();
    });
  }

  down () {
    this.drop('comments');
  }
}

module.exports = CommentSchema;
