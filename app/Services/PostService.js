'use strict';

const PostRepository = use('App/Repositories/PostRepository');
const PostLikeRepository = use('App/Repositories/PostLikeRepository');
const ProductRepository = use('App/Repositories/ProductRepository');
const ShopRepository = use('App/Repositories/ShopRepository');
class PostService {
  constructor() {
    this.postRepo = new PostRepository();
    this.postLikeRepo = new PostLikeRepository();
    this.productRepo = new ProductRepository();
    this.shopRepo = new ShopRepository();
  }

  /**
   * create
   * @param userId
   * @param data
   * @return {Promise.<*>}
   */
  async create(userId, data) {
    const post = await this.postRepo.create(userId, data);
    return post;
  }

  /**
   * getPost
   * @param id
   * @return {Promise.<*>}
   */
  async getPost(id) {
    const post = await this.postRepo.getPost(id);
    if (post) {
      post.images = JSON.parse(post.images);
      if (post.product_id) {
        post.product = await this.productRepo.getProductWithPost(post.product_id);
      }
      if (post.shop_id) {
        post.shop = await this.shopRepo.getShopWithPost(post.shop_id);
      }
    }
    return post;
  }

  /**
   * likePost
   * @param userId
   * @param postId
   * @return {Promise.<boolean>}
   */
  async likePost(userId, postId) {
    return await this.postLikeRepo.like(postId, userId);
  }

  /**
   * unlikePost
   * @param userId
   * @param postId
   * @return {Promise.<boolean>}
   */
  async unlikePost(userId, postId) {
    return await this.postLikeRepo.unlike(postId, userId);
  }
}

module.exports = PostService;
