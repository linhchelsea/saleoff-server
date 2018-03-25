'use strict';

const Schema = use('Schema');

class CreatePostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.bigIncrements();
      table.string('title');
      table.text('description');
      table.integer('sale_percent').default(0);
      table.boolean('is_trust').default(0);
      table.text('cover');
      table.date('start_date');
      table.date('end_date');
      table.string('address');
      table.integer('view').default(0);
      table.integer('like').default(0);
      table.bigInteger('product_id').unsigned().references('id').inTable('products');
      table.bigInteger('shop_id').unsigned().references('id').inTable('shops');
      table.bigInteger('user_id').unsigned().references('id').inTable('users');
      table.bigInteger('admin_id').unsigned().references('id').inTable('admins');
      table.boolean('is_checked').default(0);
      table.timestamps();
    });
  }

  down () {
    this.drop('posts');
  }
}

module.exports = CreatePostSchema;
