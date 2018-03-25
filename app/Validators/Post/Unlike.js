'use strict';

const Api = use('App/Validators/Api');
const PostRepository = use('App/Repositories/PostRepository');
const PostLikeRepository = use('App/Repositories/PostLikeRepository');
const Config = use('Config');
const { postNotFound, postUnliked } = Config.get('error');
class Create extends Api {
  constructor() {
    super();
    this.postRepo = new PostRepository();
    this.postLikeRepo = new PostLikeRepository();
  }
  async authorize() {
    const { id } = this.ctx.params;
    const user = await this.ctx.auth.getUser();
    const post = await this.postRepo.getPost(id);
    if (!post) {
      this.authorizeFails(postNotFound);
      return false;
    }
    const postLike = await this.postLikeRepo.getPostLike(id, user.id);
    if (!postLike) {
      this.authorizeFails(postUnliked);
      return false;
    }
    return true;
  }
}

module.exports = Create;
