'use strict';

const Schema = use('Schema');

class PostLikeSchema extends Schema {
  up () {
    this.create('post_likes', (table) => {
      table.bigIncrements();
      table.bigInteger('user_id').unsigned().references('id').inTable('users');
      table.bigInteger('post_id').unsigned().references('id').inTable('posts');
      table.unique(['user_id', 'post_id']);
      table.timestamps();
    });
  }

  down () {
    this.drop('post_likes');
  }
}

module.exports = PostLikeSchema;
