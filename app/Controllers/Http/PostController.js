'use strict';

const Controller = use('App/Controllers/Controller');
const PostService = use('App/Services/PostService');
const Config = use('Config');
const { postNotFound } = Config.get('error');
class PostController extends Controller {
  constructor() {
    super();
    this.postService = new PostService();
  }

  /**
   * create
   * @param request
   * @param auth
   * @param response
   * @return {Promise.<*>}
   */
  async create({ request, auth, response }) {
    const user = await auth.getUser();
    const postData = request.all();
    const post = await this.postService.create(user.id, postData);
    if (post) {
      const data = {
        post,
      };
      return this.buildSuccess({ data });
    }
    return this.errorResponse(response, {});
  }

  /**
   * getPost
   * @param params
   * @param response
   * @return {Promise.<*>}
   */
  async getPost({ params, response }) {
    const { id } = params;
    const post = await this.postService.getPost(id);
    if (post) {
      const data = {
        post,
      };
      return this.buildSuccess({ data });
    }
    return this.errorResponse(response, {
      message: postNotFound.message,
      error: postNotFound.error,
    });
  }

  /**
   * getLikePost
   * @param params
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getLikePost({ params, auth }) {
    const { id } = params;
    const user = await auth.getUser();
    await this.postService.likePost(user.id, id);
    return this.buildSuccess({});
  }

  /**
   * getUnlikePost
   * @param params
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getUnlikePost({ params, auth }) {
    const { id } = params;
    const user = await auth.getUser();
    await this.postService.unlikePost(user.id, id);
    return this.buildSuccess({});
  }
}

module.exports = PostController;
