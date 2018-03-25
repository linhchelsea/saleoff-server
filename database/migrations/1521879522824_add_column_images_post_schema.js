'use strict';

const Schema = use('Schema');

class AddColumnImagesPostSchema extends Schema {
  up () {
    this.table('posts', (table) => {
      table.text('images').notNullable().after('cover');
    });
  }

  down () {
    this.table('add_column_images_posts', (table) => {
      table.dropColumn('images');
    });
  }
}

module.exports = AddColumnImagesPostSchema;
