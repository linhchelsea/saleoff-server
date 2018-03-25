'use strict';

const Schema = use('Schema');

class CreateShopCommentSchema extends Schema {
  up () {
    this.create('post_comments', (table) => {
      table.bigIncrements();
      table.bigInteger('user_id').unsigned().references('id').inTable('users');
      table.bigInteger('post_id').unsigned().references('id').inTable('posts');
      table.text('comment');
      table.timestamps();
    });
  }

  down () {
    this.drop('post_comments');
  }
}

module.exports = CreateShopCommentSchema;
