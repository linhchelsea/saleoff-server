'use strict';

const Schema = use('Schema');

class AddColumnCommentPostSchema extends Schema {
  up () {
    this.table('posts', (table) => {
      table.bigInteger('comment').after('like').default(0);
    });
  }

  down () {
    this.table('posts', (table) => {
      table.dropColumn('comment');
    });
  }
}

module.exports = AddColumnCommentPostSchema;
