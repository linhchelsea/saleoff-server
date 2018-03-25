'use strict';

const Api = use('App/Validators/Api');
const PostRepository = use('App/Repositories/PostRepository');
const Config = use('Config');
const { postNotFound } = Config.get('error');
class Create extends Api {
  constructor() {
    super();
    this.postRepo = new PostRepository();
  }
  async authorize () {
    const { postId } = this.ctx.params;
    const post = await this.postRepo.getPost(postId);
    if (!post) {
      this.authorizeFails(postNotFound);
      return false;
    }
    return true;
  }
  get rules () {
    return {
      comment: 'required',
    };
  }

  get messages () {
    return {
      'comment.required': 'comment_is_required',
    };
  }
}

module.exports = Create;
