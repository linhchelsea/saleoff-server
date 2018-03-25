'use strict';

const CommentRepository = use('App/Repositories/CommentRepository');
const PostRepository = use('App/Repositories/PostRepository');
const ShopRepository = use('App/Repositories/ShopRepository');
const ShopUserRepository = use('App/Repositories/ShopUserRepository');
class CommentService {
  constructor () {
    this.commentRepo = new CommentRepository();
    this.postRepo = new PostRepository();
    this.shopRepo = new ShopRepository();
    this.shopUserRepo = new ShopUserRepository();
  }

  /**
   * addComment
   * @param user
   * @param postId
   * @param comment
   * @return {Promise.<*>}
   */
  async addComment(user, postId, comment) {
    let type = 'user';
    let author = {
      id: user.id,
      name: user.username,
      avatar: user.avatar,
    };
    const post = await this.postRepo.getPost(postId);
    if (post.shop_id) {
      const shop = await this.shopRepo.getShopInfo(post.shop_id);
      if (shop.owner_id === user.id) {
        type = 'shop';
      } else {
        const shopUser = await this.shopUserRepo.getShopUser(post.shop_id, user.id);
        if (shopUser) {
          type = 'shop';
        }
      }
      author = {
        id: shop.id,
        name: shop.name,
        avatar: shop.avatar,
      };
    }
    const commentObj = await this.commentRepo.addComment(user.id, postId, type, comment);
    commentObj.author = author;
    return commentObj;
  }

  /**
   * editComment
   * @param id
   * @param comment
   * @return {Promise.<void>}
   */
  async editComment(id, comment) {
    await this.commentRepo.editComment(id, comment);
  }
}

module.exports = CommentService;

