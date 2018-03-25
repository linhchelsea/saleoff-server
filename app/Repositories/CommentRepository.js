'use strict';

const Comment = use('App/Models/Comment');
const Post = use('App/Models/Post');
const Database = use('Database');
class CommentRepository {
  constructor() {
    this.comment = Comment;
    this.post = Post;
  }

  /**
   * addComment
   * @param userId
   * @param postId
   * @param type
   * @param comment
   * @return {Promise.<*>}
   */
  async addComment(userId, postId, type, comment) {
    const db = await Database.beginTransaction();
    try {
      const commentObj = new Comment();
      commentObj.user_id = userId;
      commentObj.post_id = postId;
      commentObj.type = type;
      commentObj.comment = comment;
      await commentObj.save();
      // increase post comment
      const post = await this.post.find(postId);
      post.comment += 1;
      await post.save();
      db.commit();
      return commentObj.toJSON();
    } catch (err) {
      console.log(err);
      db.rollback();
      return null;
    }
  }

  /**
   * getComment
   * @param id
   * @return {Promise.<null>}
   */
  async getComment(id) {
    const comment = await this.comment.find(id);
    return comment ? comment.toJSON() : null;
  }

  /**
   * editComment
   * @param id
   * @param comment
   * @return {Promise.<void>}
   */
  async editComment(id, comment) {
    console.log(id);
    console.log(comment);
    const db = await Database.beginTransaction();
    try {
      const commentObj = await this.comment.find(id);
      commentObj.comment = comment;
      await commentObj.save();
      db.commit();
    } catch (err) {
      console.log(err);
      db.rollback();
    }
  }
}

module.exports = CommentRepository;
