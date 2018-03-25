'use strict';

const Post = use('App/Models/Post');
const Database = use('Database');
const SystemException = use('App/Exceptions/SystemException');
class PostRepository {
  constructor() {
    this.post = Post;
  }

  async create(userId, data) {
    const db = await Database.beginTransaction();
    try {
      const post = new Post();
      post.title = data.title;
      post.description = data.description;
      post.sale_percent = data.sale_percent;
      post.cover = data.cover;
      post.images = JSON.stringify(data.images);
      post.start_date = data.start_date;
      post.end_date = data.end_date;
      post.address = data.address;
      post.product_id = data.product_id || null;
      post.shop_id = data.shop_id || null;
      post.user_id = userId;
      await post.save();
      db.commit();
      post.images = data.images;
      return post ? post.toJSON() : null;
    } catch (err) {
      console.log(err);
      db.rollback();
      return null;
    }
  }

  /**
   * getPost
   * @param id
   * @return {Promise.<null>}
   */
  async getPost(id) {
    const db = await Database.beginTransaction();
    try {
      const post = await this.post
        .query()
        .where('id', id)
        .with('user')
        .first();
      post.view += 1;
      await post.save();
      db.commit();
      return post ? post.toJSON() : null;
    } catch (err) {
      console.log(err);
      db.rollback();
      return null;
    }
  }
}

module.exports = PostRepository;
