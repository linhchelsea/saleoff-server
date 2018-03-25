'use strict';

const PostLike = use('App/Models/PostLike');
const Post = use('App/Models/Post');
const Database = use('Database');
class PostLikeRepository {
  constructor() {
    this.postLike = PostLike;
    this.post = Post;
  }

  /**
   * createNewLike
   * @param postId
   * @param userId
   * @return {Promise.<boolean>}
   */
  async like(postId, userId) {
    const db = await Database.beginTransaction();
    try {
      const postLike = new PostLike();
      postLike.post_id = postId;
      postLike.user_id = userId;
      await postLike.save();
      // increase post like
      const post = await this.post.find(postId);
      post.like += 1;
      await post.save();
      db.commit();
      return true;
    } catch (err) {
      db.rollback();
      return false;
    }
  }

  /**
   * unlike
   * @param postId
   * @param userId
   * @return {Promise.<boolean>}
   */
  async unlike(postId, userId) {
    const db = await Database.beginTransaction();
    try {
      const postLike = await this.postLike
        .query()
        .where('post_id', postId)
        .where('user_id', userId)
        .first();
      await postLike.delete();
      // increase post like
      const post = await this.post.find(postId);
      post.like -= 1;
      await post.save();
      db.commit();
      return true;
    } catch (err) {
      db.rollback();
      return false;
    }
  }

  /**
   * getPostLike
   * @param postId
   * @param userId
   * @return {Promise.<null>}
   */
  async getPostLike(postId, userId) {
    const postLike = await this.postLike
      .query()
      .where('post_id', postId)
      .where('user_id', userId)
      .first();
    return postLike ? postLike.toJSON() : null;
  }
}

module.exports = PostLikeRepository;
