'use strict';

const Controller = use('App/Controllers/Controller');
const CommentService = use('App/Services/CommentService');
class CommentController extends Controller {
  constructor () {
    super();
    this.commentService = new CommentService();
  }

  /**
   * addComment
   * @param request
   * @param params
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async addComment({ request, params, auth }) {
    const user = await auth.getUser();
    const { comment } = request.only(['comment']);
    const { postId } = params;
    const commentObj = await this.commentService.addComment(user, postId, comment);
    const data = {
      comment: commentObj,
    };
    return this.buildSuccess({ data });
  }
  /**
   * addComment
   * @param request
   * @param params
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async editComment({ request, params }) {
    const { comment } = request.only(['comment']);
    const { id } = params;
    await this.commentService.editComment(id, comment);
    return this.buildSuccess({});
  }
}
module.exports = CommentController;
