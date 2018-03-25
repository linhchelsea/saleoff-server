'use strict';

const Api = use('App/Validators/Api');
const CommentRepository = use('App/Repositories/CommentRepository');
const Config = use('Config');
const { commentNotFound, notYourComment } = Config.get('error');
class Create extends Api {
  constructor() {
    super();
    this.commentRepo = new CommentRepository();
  }
  async authorize () {
    const { id } = this.ctx.params;
    const user = await this.ctx.auth.getUser();
    const comment = await this.commentRepo.getComment(id);
    if (!comment) {
      this.authorizeFails(commentNotFound);
      return false;
    }
    if (comment.user_id !== user.id) {
      this.authorizeFails(notYourComment);
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
